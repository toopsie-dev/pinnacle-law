/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export type NavContextProps = {
  isSticky: boolean;
  isMobile: boolean;
  handleScroll: (isSticky: boolean) => void;
  handleMenu: (isMobile: boolean) => void;
};

export const NavContext = createContext<NavContextProps>({
  isSticky: false,
  isMobile: false,
  handleScroll: (_isSticky: boolean) => undefined,
  handleMenu: (_isMobile: boolean) => undefined,
});

export type NavContextProviderProps = {
  children: React.ReactNode;
};

export function NavContextProvider({ children }: NavContextProviderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = (_isSticky: boolean) => {
    setIsSticky(_isSticky);
  };

  const handleMenu = (_isMobile: boolean) => {
    setIsMobile(_isMobile);
  };

  const contextValue: NavContextProps = {
    isSticky,
    isMobile,
    handleScroll,
    handleMenu,
  };

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}
