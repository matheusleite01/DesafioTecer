import useWindowSize from "@/hooks/useWindowSize";
import { GlobalContextProps, ProductProps } from "@/types";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({} as GlobalContextProps);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartDataProducts, setCartDataProducts] = useState<ProductProps[]>([]);
  const { asPath } = useRouter();
  const { width } = useWindowSize();
  const enabledSideCart =
    cartDataProducts.length > 0 && asPath !== "/cart" && (width as number) > 600;

  const insertCartProducts = (products: ProductProps) => {
    setCartDataProducts((prev) => {
      products.quantity = 1;
      const newProducts = [...prev, products];
      localStorage.setItem("cartDataProducts", JSON.stringify(newProducts));
      return newProducts;
    });
  };

  const removeCartProducts = (id: string) => {
    const newData = cartDataProducts?.filter((item) => item.id !== id);
    setCartDataProducts(newData);
    localStorage.setItem("cartDataProducts", JSON.stringify(newData));
  };

  const increaseQuantity = (id: string, mode: "increase" | "minus") => {
    const newData = cartDataProducts?.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              item.quantity &&
              (mode === "increase" ? ++item.quantity : --item.quantity),
          }
        : item,
    );
    setCartDataProducts(newData);
    localStorage.setItem("cartDataProducts", JSON.stringify(newData));
  };

  useEffect(() => {
    const localData = localStorage.getItem("cartDataProducts");
    if (localData) setCartDataProducts(JSON.parse(localData));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        cartDataProducts,
        setCartDataProducts,
        insertCartProducts,
        removeCartProducts,
        increaseQuantity,
        enabledSideCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
