import EmptyCart from "@/components/EmptyCart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("EmptyCart component", () => {
  it("Should render component", () => {
    render(<EmptyCart />);

    const cart = screen.getByRole("heading", { name: /your cart is empty/i });

    expect(cart).toBeInTheDocument();
  });
  it("should render the Home link with correct URL", () => {
    render(<EmptyCart />);

    const homeLink = screen.getByRole("link", { name: /Shop our produts/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
