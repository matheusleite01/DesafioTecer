import { ProductProps } from "@/types";
import { toast } from "sonner";

export default function quantityChange(
  type: "increase" | "minus",
  cardProduct: ProductProps,
  increaseQuantity: Function,
) {
  const { quantity } = cardProduct;
  const errorMsgIncrease =
    "This product has a purchase quantity limited to 5 units per customer.";

  const errorMsgMinus = "Must have at least 1 unit";

  if (type === "increase" && (quantity as number) >= 5) {
    return toast.error(errorMsgIncrease);
  }

  if (type === "minus" && (quantity as number) <= 1) {
    return toast.error(errorMsgMinus);
  }

  increaseQuantity(cardProduct.id, type);
}
