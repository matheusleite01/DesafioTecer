import { ProductProps } from "@/types";
import formatCurrency from "@/utils/formatCurrency";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";
import { toast } from "sonner";
import { useRouter } from "next/router";
import totalPrice from "@/utils/totalPrice";
import { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import quantityChange from "@/utils/quantityChange";
type CartProductListProps = {
  cartProducts: ProductProps[];
};

const CartProductList = ({ cartProducts }: CartProductListProps) => {
  const { removeCartProducts, increaseQuantity } = useGlobalContext();
  const { push } = useRouter();
  const price = totalPrice(cartProducts);
  const [enabledIncreaseAndMinus, setEnabledIncreaseAndMinus] = useState<
    string | null
  >(null);

  const handleRemoveProducts = (id: string, title: string) => {
    removeCartProducts(id);
    toast.success(`"${title.slice(0, 10)}" has been removed from your cart`);
  };

  return (
    <div className="flex flex-col gap-4 max-sm:mx-2.5">
      <table className="bg-white w-full mt-7">
        <tr className="text-left text-black">
          <th className="w-3/5">Product</th>
          <th className="w-1/5 text-center">Quantity</th>
          <th className="w-1/5 text-right">Price</th>
        </tr>
        <tbody>
          {cartProducts?.map((product) => (
            <tr key={product.id} className="border-y-2 border-gray">
              <td
                className="flex items-center gap-4 hover:underline cursor-pointer"
                onClick={() => push(`/${product.id}`)}
              >
                <Image
                  src={product.image}
                  width={60}
                  height={60}
                  alt={product.title}
                />
                {product.title.slice(0, 10)}
              </td>
              <td
                className="text-center"
                onMouseEnter={() => setEnabledIncreaseAndMinus(product.id)}
                onMouseLeave={() => setEnabledIncreaseAndMinus(null)}
              >
                {enabledIncreaseAndMinus === product.id ? (
                  <span className="flex justify-center items-center gap-3">
                    {" "}
                    <FaMinusCircle
                      size={16}
                      color="#DFDFDF"
                      className="cursor-pointer"
                      onClick={() =>
                        quantityChange("minus", product, increaseQuantity)
                      }
                    />
                    {product.quantity}
                    <AiFillPlusCircle
                      size={19}
                      color="#DFDFDF"
                      className="cursor-pointer"
                      onClick={() =>
                        quantityChange("increase", product, increaseQuantity)
                      }
                    />
                  </span>
                ) : (
                  <>
                    <span>{product.quantity}</span>
                  </>
                )}
              </td>
              <td className="text-right">
                <div className="flex items-center justify-end gap-4">
                  <span>{formatCurrency(product.price)}</span>
                  <IoCloseOutline
                    size={20}
                    className="text-purple cursor-pointer rounded transition-all duration-100 hover:bg-black hover:text-white"
                    onClick={() =>
                      handleRemoveProducts(product.id, product.title)
                    }
                    role="button"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xl self-end mr-2">
        Total: <span className="font-bold">{formatCurrency(price)}</span>
      </p>
    </div>
  );
};

export default CartProductList;
