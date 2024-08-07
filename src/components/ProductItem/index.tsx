import Image from "next/image";
import formatCurrency from "@/utils/formatCurrency";
import { TiPlus } from "react-icons/ti";
import Button from "../Button";
import { ProductProps } from "@/types";
import useGlobalContext from "@/hooks/useGlobalContext";
import Router from "next/router";
import { toast } from "sonner";

type ProductItemProps = {
  product: ProductProps;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const { insertCartProducts, cartDataProducts } = useGlobalContext();
  const cartsId = cartDataProducts?.map((item) => item.id);
  const doublePrice = product.price * 2;

  const handleClickProduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    insertCartProducts(product);
    toast.success(
      `"${product.title.slice(0, 10)}" has been added to your cart`,
    );
  };

  return (
    <div
      className="flex flex-col justify-start items-center gap-4 bg-white max-w-80 text-center py-6 mt-1 rounded-xl shadow-xl cursor-pointer h-128 transition-all duration-200 ease-in hover:scale-105"
      onClick={() => Router.push(`/${product.id}`)}
    >
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
        <div className="flex justify-between items-center">
          <span className="flex gap-1 text-xl text-black font-bold">
            {formatCurrency(product?.price)}
            {+product.id % 2 === 0 && (
              <span className="text-borderGray text-xs font-normal line-through">
                {formatCurrency(doublePrice)}
              </span>
            )}
          </span>
          {cartsId.includes(product.id) ? (
            <span className="text-xs text-green">In the cart</span>
          ) : (
            <Button handleClick={handleClickProduct}>
              add to cart <TiPlus />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
