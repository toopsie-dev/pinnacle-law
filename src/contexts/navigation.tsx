/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export type NavContextProps = {
  isSticky: boolean;
  isMobile: boolean;
  showSidebar: boolean;
  handleScroll: (isSticky: boolean) => void;
  handleMenu: (isMobile: boolean) => void;
  handleShowSidebar: () => void;
};

export const NavContext = createContext<NavContextProps>({
  isSticky: false,
  isMobile: false,
  showSidebar: false,
  handleScroll: (_isSticky: boolean) => undefined,
  handleMenu: (_isMobile: boolean) => undefined,
  handleShowSidebar: () => undefined,
});

export type NavContextProviderProps = {
  children: React.ReactNode;
};

export function NavContextProvider({ children }: NavContextProviderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleScroll = (_isSticky: boolean) => {
    setIsSticky(_isSticky);
  };

  const handleMenu = (_isMobile: boolean) => {
    setIsMobile(_isMobile);
  };

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const contextValue: NavContextProps = {
    isSticky,
    isMobile,
    showSidebar,
    handleScroll,
    handleMenu,
    handleShowSidebar,
  };

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}
