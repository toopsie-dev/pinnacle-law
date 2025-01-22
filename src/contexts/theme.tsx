/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

export type ThemeContextProps = {
  theme: string;
  switchTheme: (theme: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  switchTheme: (_theme: boolean) => undefined,
});

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const switchTheme = (themeProp: boolean) => {
    setTheme(themeProp ? "dark" : "light");
  };

  const contextValue: ThemeContextProps = {
    theme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
