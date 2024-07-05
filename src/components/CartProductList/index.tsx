import { ProductProps } from "@/types";
import formatCurrency from "@/utils/formatCurrency";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";
import { toast } from "sonner";
import { useRouter } from "next/router";
type CartProductListProps = {
  cartProducts: ProductProps[];
};

const CartProductList = ({ cartProducts }: CartProductListProps) => {
  const { removeCartProducts } = useGlobalContext();
  const { push } = useRouter();

  const totalPrice = cartProducts?.reduce((acu, item) => acu + item.price, 0);

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
          {cartProducts?.map(({ id, title, price, image }) => (
            <tr key={id} className="border-y-2 border-gray">
              <td
                className="flex items-center gap-4 hover:underline cursor-pointer"
                onClick={() => push(`/${id}`)}
              >
                <Image src={image} width={60} height={60} alt={title} />
                {title.slice(0, 10)}
              </td>
              <td className="text-center">1</td>
              <td className="text-right">
                <div className="flex items-center justify-end gap-4">
                  <span>{formatCurrency(price)}</span>
                  <IoCloseOutline
                    size={20}
                    className="text-purple cursor-pointer rounded transition-all duration-100 hover:bg-black hover:text-white"
                    onClick={() => handleRemoveProducts(id, title)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xl self-end mr-2">
        Total: <span className="font-bold">{formatCurrency(totalPrice)}</span>
      </p>
    </div>
  );
};

export default CartProductList;
