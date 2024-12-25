import { createContext, useContext } from "react";

export const handleContext = createContext({
  openMobileMenu: false,
  setOpenMobileMenu: () => {},
});

export const handleProvider = handleContext.Provider;

export const useHandle = () => {
  return useContext(handleContext);
};
