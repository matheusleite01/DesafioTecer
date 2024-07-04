import { GlobalContextProps, ProductProps } from "@/types";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({} as GlobalContextProps);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartDataProducts, setCartDataProducts] = useState<ProductProps[]>([]);

  const insertCartProducts = (products: ProductProps) => {
    setCartDataProducts((prev) => {
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
