import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GlobalProvider, { GlobalContext } from "@/context/GlobalContext";
import { toast } from "sonner";
import ProductDetails from "@/components/ProductDetails";


const mockDataProduct = {
  id: "2",
  description: "description",
  image: "/image",
  price: 1,
  title: "title",
  rating: {
    rate: 2,
    count: 2,
  },
};

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
  },
}));

const mockContextValue = {
  insertCartProducts: jest.fn(),
  cartDataProducts: [],
  removeCartProducts: jest.fn(),
  setCartDataProducts: jest.fn(),
};

describe("ProductDetails component", () => {
  it("Should render component", () => {
    render(
      <GlobalProvider>
        <ProductDetails product={mockDataProduct} />
      </GlobalProvider>,
    );
    const title = screen.getByRole('heading', {
      name: /title/i
    })
    const button = screen.getByRole('button', {
      name: /add to card/i
    })

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should call insertCartProducts when button is click", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <ProductDetails product={mockDataProduct} />
      </GlobalContext.Provider>,
    );
    const button = screen.getByRole('button', {
      name: /add to card/i
    })

    fireEvent.click(button);

    expect(mockContextValue.insertCartProducts).toHaveBeenCalled();
  });

  it("should call insertCartProducts and show toast on button click", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <ProductDetails product={mockDataProduct} />
      </GlobalContext.Provider>,
    );
    const button = screen.getByRole('button', {
      name: /add to card/i
    })

    fireEvent.click(button);

    expect(mockContextValue.insertCartProducts).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalled();
  })

})