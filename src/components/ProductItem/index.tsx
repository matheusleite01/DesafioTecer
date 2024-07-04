import Image from "next/image";
import formatCurrency from "@/utils/formatCurrency";
import { TiPlus } from "react-icons/ti";
import Button from "../Button";
import { ProductProps } from "@/types";

type ProductItemProps = {
  product: ProductProps;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 bg-white max-w-80 text-center py-6 mt-1 rounded-xl shadow-xl cursor-pointer h-128 transition-all duration-200 ease-in hover:scale-105">
      <Image
        src={product?.image}
        width={150}
        height={150}
        alt={product?.title}
      />
      <div className=" w-full h-[2px] bg-gray mt-4"></div>
      <div className="flex flex-col gap-4 px-6">
        <div>
          <h3 className="text-purple font-bold text-xl mb-2">
            {product?.title.slice(0, 10)}
          </h3>
          <p className=" text-black text-xs text-left">
            {product?.description.slice(0, 100)}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-xl text-black font-bold">
            {formatCurrency(product?.price)}
          </span>
          <Button>
            add to cart <TiPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
