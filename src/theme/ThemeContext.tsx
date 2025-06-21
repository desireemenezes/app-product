import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme } from "../styles/themes/light";
import { darkTheme } from "../styles/themes/dark";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
}

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
    }
  }, []);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
