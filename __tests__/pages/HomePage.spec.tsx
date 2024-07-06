import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GlobalProvider from "@/context/GlobalContext";
import Page from "@/pages";
import { ProductProps } from "@/types";

const mockProduct: ProductProps[] = [
  {
    id: "1",
    title: "Test Product",
    description: "Description for test product",
    price: 100,
    image: "/test-image.jpg",
    rating: {
      count: 2,
      rate: 3,
    },
  },
];

describe("Home page", () => {
  it("Should render page", () => {
    render(
      <GlobalProvider>
        <Page data={mockProduct} error="" />
      </GlobalProvider>,
    );

    const title = screen.getByRole("heading", {
      name: /test produ/i,
    });
    const button = screen.getByRole("button", {
      name: /add to cart/i,
    });

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should render emptyData component when data is empty", () => {
    render(
      <GlobalProvider>
        <Page data={[]} error="" />
      </GlobalProvider>,
    );

    const emptyData = screen.getByText(/no data found !/i);

    expect(emptyData).toBeInTheDocument();
  });
});
