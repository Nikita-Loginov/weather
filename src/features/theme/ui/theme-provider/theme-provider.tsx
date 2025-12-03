import { useEffect } from "react";

import { useThemeStore } from "../../model/there-store";

interface ThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {
  const { theme } = useThemeStore((state) => state);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");

    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};
