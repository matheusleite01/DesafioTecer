import ProductList from "@/components/ProductList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GlobalProvider from "@/context/GlobalContext";

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


describe("ProductList component", () => {
  it("Should render component", () => {
    render(
      <GlobalProvider>
        <ProductList dataProduct={mockDataProduct} />
      </GlobalProvider>,
    );
    const product = screen.getByRole("button", { name: /add to cart/i });
    expect(product).toBeInTheDocument();
  });

  it("Should not render products when dataProduct is empty", () => {
    render(
      <GlobalProvider>
        <ProductList dataProduct={[]} />
      </GlobalProvider>,
    );
    const product = screen.queryByRole("button", { name: /add to cart/i });

    expect(product).not.toBeInTheDocument();
  });

  it("Should render component for each productItem", () => {
    render(
      <GlobalProvider>
        <ProductList dataProduct={mockDataProduct} />
      </GlobalProvider>,
    );
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockDataProduct.length);
  });
});
