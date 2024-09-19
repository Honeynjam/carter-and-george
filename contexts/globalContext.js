import { createContext, useContext } from "react";

const GlobalContext = createContext();

export function GlobalContextWrapper({ value, children }) {
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
