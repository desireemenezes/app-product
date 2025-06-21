import React, { useState } from "react";
import { Header } from "./components/Header";

interface AppProps {
  children: React.ReactNode;
}

export function App({ children }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main style={{ padding: "1rem 2rem" }}>{children}</main>
    </>
  );
}
