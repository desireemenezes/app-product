import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Siderbar/Sidebar";
import { useThemeContext } from "./theme/ThemeContext"; // novo hook
import { Container } from "./components/Container/Container";

interface AppProps {
  children: React.ReactNode;
}

export function App({ children }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeContext(); // tema global agora

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <Container onClick={sidebarOpen ? closeSidebar : undefined}>
        {children}
      </Container>
    </>
  );
}
