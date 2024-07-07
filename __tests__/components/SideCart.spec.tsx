import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import GlobalProvider from "@/context/GlobalContext";
import SideCard from "@/components/SideCart";


const mockFunction = jest.fn();

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: jest.fn(),
      push: mockFunction
    };
  },
}));

describe("SideCart component", () => {
  it("Should render component", () => {
    render(
      <GlobalProvider>
        <SideCard />
      </GlobalProvider>,
    );

    const button = screen.getByRole('button', {
      name: /go to cart/i
    })
    expect(button).toBeInTheDocument();
  });

  it("Should call push whe button is clicked", () => {
    render(
      <GlobalProvider>
        <SideCard />
      </GlobalProvider>,
    );

    const button = screen.getByRole('button', {
      name: /go to cart/i
    })

    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});
