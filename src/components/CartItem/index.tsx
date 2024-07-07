import useGlobalContext from "@/hooks/useGlobalContext";
import { ProductProps } from "@/types";
import formatCurrency from "@/utils/formatCurrency";
import quantityChange from "@/utils/quantityChange";
import Image from "next/image";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaMinusCircle } from "react-icons/fa";

type CardItemProps = {
  cardProduct: ProductProps;
};

const CardItem = ({ cardProduct }: CardItemProps) => {
  const { increaseQuantity } = useGlobalContext();
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={cardProduct?.image}
        width={50}
        height={50}
        alt={cardProduct?.title}
      />
      <span className="text-xs font-bold">
        {formatCurrency(cardProduct?.price)}
      </span>
      <div className="flex items-center gap-3">
        <FaMinusCircle
          size={16}
          color="#DFDFDF"
          className="cursor-pointer"
          role="minus"
          onClick={() => quantityChange("minus", cardProduct, increaseQuantity)}
        />
        <span className="font-bold text-xs">{cardProduct?.quantity}</span>
        <AiFillPlusCircle
          size={19}
          color="#DFDFDF"
          className="cursor-pointer"
          role="increase"
          onClick={() =>
            quantityChange("increase", cardProduct, increaseQuantity)
          }
        />
      </div>
    </div>
  );
};

export default CardItem;
