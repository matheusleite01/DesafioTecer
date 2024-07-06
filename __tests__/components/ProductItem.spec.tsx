import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GlobalProvider, { GlobalContext } from "@/context/GlobalContext";
import ProductItem from "@/components/ProductItem";
import { toast } from "sonner";

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

describe("ProductItem component", () => {
  it("Should render component", () => {
    render(
      <GlobalProvider>
        <ProductItem product={mockDataProduct} />
      </GlobalProvider>,
    );
    const product = screen.getByRole("button", {
      name: /add to cart/i,
    });
    expect(product).toBeInTheDocument();
  });

  it("Should display the double price for products with par id", () => {
    const mockDataProductDouble = {
      id: "2",
      description: "description",
      image: "/image",
      price: 2,
      title: "title",
      rating: {
        rate: 2,
        count: 2,
      },
    };
    render(
      <GlobalProvider>
        <ProductItem product={mockDataProductDouble} />
      </GlobalProvider>,
    );
    const price = screen.getByText(/\$4\.00/i);
    expect(price).toBeInTheDocument();
  });

  it("Should not display the double price for products with odd id", () => {
    const mockDataProductDouble = {
      id: "15",
      description: "description",
      image: "/image",
      price: 15,
      title: "title",
      rating: {
        rate: 2,
        count: 2,
      },
    };
    render(
      <GlobalProvider>
        <ProductItem product={mockDataProductDouble} />
      </GlobalProvider>,
    );

    const price = screen.queryByText(/\$30\.00/i);
    expect(price).not.toBeInTheDocument();
  });

  it("Should call insertCartProducts when button is click", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <ProductItem product={mockDataProduct} />
      </GlobalContext.Provider>,
    );

    const button = screen.getByRole("button", {
      name: /add to cart/i,
    });
    fireEvent.click(button);

    expect(mockContextValue.insertCartProducts).toHaveBeenCalled();
  });

  it("should call insertCartProducts and show toast on button click", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <ProductItem product={mockDataProduct} />
      </GlobalContext.Provider>,
    );

    const button = screen.getByRole("button", {
      name: /add to cart/i,
    });
    fireEvent.click(button);

    expect(mockContextValue.insertCartProducts).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalled();
  });
});
