import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GlobalProvider from "@/context/GlobalContext";
import ProductDetailsPage from "@/pages/[product_id]";
import { ProductProps } from "@/types";


let fallback = false;

jest.mock("next/router", () => ({
  useRouter() {
    return {
      isFallback: fallback,
    };
  },
}));

const mockProduct: ProductProps = {
  id: "1",
  title: "Test Product",
  description: "Description for test product",
  price: 100,
  image: "/test-image.jpg",
  rating: {
    count: 2,
    rate: 3,
  },
};
describe("Product Details Page", () => {
  it("Should rende page", () => {
    render(
      <GlobalProvider>
        <ProductDetailsPage productIdData={mockProduct} />
      </GlobalProvider>,
    );
    const title = screen.getByRole("heading", {
      name: /test produ/i,
    });
    const description = screen.getByText(/description for test product/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("Should render spiner when isFallback is true", () => {
    fallback = true;
    render(
      <GlobalProvider>
        <ProductDetailsPage productIdData={mockProduct} />
      </GlobalProvider>,
    );

    const spinner = screen.getByRole("spinner");

    expect(spinner).toBeInTheDocument();
  });
});
