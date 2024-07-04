import { ProductProps } from "@/types";
import React from "react";
import ProductItem from "../ProductItem";

type ProductListProps = {
  dataProduct: ProductProps[];
};

const ProductList = ({ dataProduct }: ProductListProps) => {
  return (
    <>
      <ul className="flex flex-wrap justify-center items-center gap-5 p-10 ">
        {dataProduct?.map((productItem) => (
          <li key={productItem.id} >
            <ProductItem product={productItem} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;

