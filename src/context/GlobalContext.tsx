import { GlobalContextProps, ProductProps } from "@/types";
import { createContext, useState } from "react";

export const GlobalContext = createContext({} as GlobalContextProps);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartDataProducts, setCartDataProducts] = useState<ProductProps[]>([]);

  const insertCartProducts = (products: ProductProps) => {
    setCartDataProducts((prev) => [...prev, products]);
  };

  const removeCartProducts = (id: string) => {
    const newData = cartDataProducts?.filter(item => item.id !== id);
    setCartDataProducts(newData);
  }

  return (
    <GlobalContext.Provider
      value={{ cartDataProducts, setCartDataProducts, insertCartProducts, removeCartProducts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
