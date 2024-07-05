import fetchIdProduct from "@/utils/fetchIdProdyct";
import { ProductProps } from "@/types/index";
import type { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import ProductDetails from "@/components/ProductDetails";

type ProductDetailsProps = {
  productIdData: ProductProps;
};

const ProductDetailsPage = ({ productIdData }: ProductDetailsProps) => {
  return (
    <div className="flex justify-center h-[80vh] container mx-auto">
      <ProductDetails product={productIdData} />
    </div>
  );
};

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const id = params?.product_id as string;
  const productIdData = await fetchIdProduct(id);
  return { props: { productIdData } };
}) satisfies GetStaticProps<{}>;

export default ProductDetailsPage;
