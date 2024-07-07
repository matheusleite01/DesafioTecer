import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import GlobalProvider, {GlobalContext} from "@/context/GlobalContext";
import CardItem from "@/components/CartItem";
import { GlobalContextProps } from "@/types";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: jest.fn(),
    };
  },
}));

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

const mockContextValue: GlobalContextProps = {
  insertCartProducts: jest.fn(),
  cartDataProducts: [],
  removeCartProducts: jest.fn(),
  setCartDataProducts: jest.fn(),
  enabledSideCart: false,
  increaseQuantity: jest.fn(),
};

describe("CartItem component", () => {
  it("Sould render component", () => {
    render(
      <GlobalProvider>
        <CardItem cardProduct={mockDataProduct} />
      </GlobalProvider>,
    );

    const price = screen.getByText(/\$1\.00/i);
    expect(price).toBeInTheDocument();
  });

  it("Should call increaseQuantity when minus is clicked", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <CardItem cardProduct={mockDataProduct} />
      </GlobalContext.Provider>,
    );

    const minus = screen.getByRole("minus");

    fireEvent.click(minus)

    expect(minus).toBeInTheDocument();
    expect(mockContextValue.increaseQuantity).toHaveBeenCalled();
  });

  it("Should call increaseQuantity when increase is clicked", () => {
    render(
      <GlobalContext.Provider value={mockContextValue}>
        <CardItem cardProduct={mockDataProduct} />
      </GlobalContext.Provider>,
    );

    const increase = screen.getByRole("increase");

    fireEvent.click(increase)

    expect(increase).toBeInTheDocument();
    expect(mockContextValue.increaseQuantity).toHaveBeenCalled();
  });
});
