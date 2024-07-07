import "@testing-library/jest-dom";
import Header from "@/components/Header";
import GlobalProvider from "@/context/GlobalContext";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: jest.fn(),
    };
  },
}));

describe("Header component", () => {

  it("Should render component", () => {
    render(
      <GlobalProvider>
        <Header />
      </GlobalProvider>,
    );

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });

  it("should render the Home link with correct URL", () => {
    render(
      <GlobalProvider>
        <Header />
      </GlobalProvider>,
    );

    
    const homeLink = screen.getByRole("link", { name: /Dev Store/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test('should render the Cart link with correct URL', () => {
    render(
      <GlobalProvider>
        <Header />
      </GlobalProvider>,
    );

    
    const cartLink = screen.getByRole('linkCart');
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });
});
