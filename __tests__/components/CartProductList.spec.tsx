import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GlobalProvider, { GlobalContext } from "@/context/GlobalContext";
import { toast } from "sonner";
import CartProductList from "@/components/CartProductList";

const mockDataProduct = [
  {
    id: "2",
    description: "description",
    image: "/image",
    price: 1,
    title: "title",
    rating: {
      rate: 2,
      count: 2,
    },
  },
];

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: jest.fn()
    };
  },
}));

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

describe("CartProductList component", () => {
  it("Should render component", () => {
    render(
      <GlobalProvider>
        <CartProductList cartProducts={mockDataProduct} />
      </GlobalProvider>,
    );
    const table = screen.getByRole("cell", {
      name: /title title/i,
    });
    expect(table).toBeInTheDocument();
  });

  it("Should not render component when cartProducts is empty", () => {
    render(
      <GlobalProvider>
        <CartProductList cartProducts={[]} />
      </GlobalProvider>,
    );
    const table = screen.queryByRole("cell", {
      name: /title title/i,
    });
    expect(table).not.toBeInTheDocument();
  });

  it("Should call removeCartProducts when close button was clicked", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <CartProductList cartProducts={mockDataProduct} />
      </GlobalContext.Provider>,
    );
    const close = screen.getByRole("button");

    fireEvent.click(close);

    expect(mockContextValue.removeCartProducts).toHaveBeenCalled();
  });

  it("Should call removeCartProducts and toast when close button was clicked", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <CartProductList cartProducts={mockDataProduct} />
      </GlobalContext.Provider>,
    );
    const close = screen.getByRole("button");

    fireEvent.click(close);

    expect(mockContextValue.removeCartProducts).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalled();
  });
});
