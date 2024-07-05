import CartProductList from "@/components/CartProductList";
import EmptyCart from "@/components/EmptyCart";
import useGlobalContext from "@/hooks/useGlobalContext";
import Head from "next/head";
import React from "react";

const CartPage = () => {
  const { cartDataProducts } = useGlobalContext();

  return (
    <>
    <Head>
        <title>Cart</title>
        <meta name="description" content="Dev Store products" />
    </Head>
      <div className="container mx-auto">
        {cartDataProducts.length ? (
          <CartProductList cartProducts={cartDataProducts} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default CartPage;
