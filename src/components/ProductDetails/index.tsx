import { ProductProps } from "@/types";
import starIcon from "@/assets/icons/starIcon.svg";
import Image from "next/image";
import formatCurrency from "@/utils/formatCurrency";
import { TiPlus } from "react-icons/ti";

type ProductDetailsProps = {
  product: ProductProps;
};
const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="flex justify-center items-center gap-10">
      <Image
        src={product?.image}
        width={300}
        height={300}
        alt={product?.title}
        className="mr-10"
      />
      <div className="w-0.5 bg-gray h-[430px]"></div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-xll text-purple font-bold">
            {product?.title.slice(0, 10)}
          </h1>
          <p className="text-xl max-w-lg">
            {product?.description.slice(0, 130)}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-black text-xll font-bold">
            {formatCurrency(product?.price)}
          </span>
          <div className="flex gap-2 items-center">
            <Image src={starIcon} alt="star" />
            <span className="text-borderGray underline">400 review</span>
          </div>
        </div>
        <button className="flex justify-center items-center gap-2 text-white text-xls font-bold bg-purple p-4 rounded-lg max-w-52 transition-all duration-150 ease-in hover:bg-black">
          add to card
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
