import { ProductProps } from "@/types";

export default function totalPrice(productPrices: ProductProps[]) {
  return productPrices?.reduce((acu, item) => {
    const { price, quantity = 1 } = item;
    return acu + price * quantity;
  }, 0);
}
