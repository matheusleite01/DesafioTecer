import { GlobalContextProps } from "@/types";
import { createContext } from "react";

export const GlobalContext = createContext({} as GlobalContextProps);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
