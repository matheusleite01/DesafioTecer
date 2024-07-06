import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GlobalProvider from "@/context/GlobalContext";
import CartPage from "@/pages/cart";

describe("Cart page", () => {
  it("Should render component", () => {
    render(
      <GlobalProvider>
        <CartPage />
      </GlobalProvider>,
    );
    const cart = screen.getByRole("heading", {
      name: /your cart is empty/i,
    });

    expect(cart).toBeInTheDocument();
  });
});
