import React from "react";
import CardItem from "../CartItem";
import useGlobalContext from "@/hooks/useGlobalContext";
import formatCurrency from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import totalPrice from "@/utils/totalPrice";

const SideCard = () => {
  const { cartDataProducts } = useGlobalContext();
  const price = totalPrice(cartDataProducts);
  const { push } = useRouter();
  return (
    <div className="fixed top-0 right-0 h-[100%] bg-white w-52 shadow-lg px-2 py-5 text-center">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-2 border-b-2 border-gray pb-3 mb-3">
          <span className="text-black font-bold">{formatCurrency(price)}</span>
          <button
            className="w-28 bg-purple text-white  font-bold p-2 rounded-md transition-all duration-150 ease-in hover:bg-black"
            onClick={() => push("/cart")}
          >
            go to cart
          </button>
        </div>
        <ul className="grid grid-cols-2 gap-5 max-h-[750px] overflow-auto">
          {cartDataProducts?.map((product) => (
            <li key={product.id}>
              <CardItem cardProduct={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideCard;
