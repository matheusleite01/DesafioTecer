import { ProductProps } from "@/types";
import starIcon from "@/assets/icons/starIcon.svg";
import Image from "next/image";
import formatCurrency from "@/utils/formatCurrency";
import { TiPlus } from "react-icons/ti";
import useGlobalContext from "@/hooks/useGlobalContext";
import { BsFillCartCheckFill } from "react-icons/bs";
import Rating from "@mui/material/Rating";
import { toast } from "sonner";

type ProductDetailsProps = {
  product: ProductProps;
};
const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { insertCartProducts, cartDataProducts, enabledSideCart } =
    useGlobalContext();
  const cartsId = cartDataProducts?.map((item) => item.id);
  const doublePrice = product.price * 2;

  const handleClickProduct = () => {
    insertCartProducts(product);
    toast.success(
      `"${product.title.slice(0, 10)}" has been added to your cart`,
    );
  };
  return (
    <div
      className={`flex justify-center items-center gap-10 m-5 ${
        enabledSideCart ? " max-lg:flex-wrap" : "max-md:flex-wrap"
      }`}
    >
      <Image
        src={product?.image}
        width={300}
        height={300}
        alt={product?.title}
        className={`mr-10 ${enabledSideCart ? "max-lg:w-52" : "max-md:w-52"}`}
      />
      <div className={`w-0.5 bg-gray h-[430px] ${enabledSideCart ? "max-lg:hidden": "max-md:hidden"}`}></div>
      <div className="flex flex-col gap-12 max-md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xll text-purple font-bold max-md:text-xa">
            {product?.title.slice(0, 10)}
          </h1>
          <p className="text-xl max-w-lg max-md:text-base">
            {product?.description.slice(0, 130)}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex gap-1 text-black text-xll font-bold max-md:text-xa">
            {formatCurrency(product?.price)}
            {+product.id % 2 === 0 && (
              <span className="text-borderGray text-base font-normal line-through max-md:text-xs">
                {formatCurrency(doublePrice)}
              </span>
            )}
          </span>
          <div className="flex gap-2 items-center">
            <Rating
              name="half-rating-read"
              defaultValue={product?.rating?.rate}
              readOnly
            />
            <span className="text-borderGray text-xs underline">
              {product?.rating?.count} review
            </span>
          </div>
        </div>
        {cartsId?.includes(product?.id) ? (
          <div className="flex items-center gap-2">
            <span className="text-xl text-green">In the cart</span>
            <BsFillCartCheckFill size={20} color="#04C012" />
          </div>
        ) : (
          <button
            onClick={handleClickProduct}
            className="flex justify-center items-center gap-2 text-white text-xls font-bold bg-purple p-4 rounded-lg max-w-52 transition-all duration-150 ease-in hover:bg-black"
          >
            add to card
            <TiPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
