import { useEffect, useState, type ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme } from "../styles/themes/light";
import { darkTheme } from "../styles/themes/dark";
import { ToggleThemeButton } from "./ToggleThemeButton";

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
    // Garante que o valor salvo seja aplicado ao carregar
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
    }
  }, []);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <ToggleThemeButton isDark={isDark} toggleTheme={toggleTheme} />
    </StyledThemeProvider>
  );
}
