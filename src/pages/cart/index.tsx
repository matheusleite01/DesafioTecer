import CartProductList from "@/components/CartProductList";
import EmptyCart from "@/components/EmptyCart";
import useGlobalContext from "@/hooks/useGlobalContext";
import React from "react";

const CartPage = () => {
  const { cartDataProducts } = useGlobalContext();

  return (
    <div className="container mx-auto">
      {cartDataProducts.length ? (
        <CartProductList cartProducts={cartDataProducts} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartPage;
