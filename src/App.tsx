import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Siderbar/Sidebar";
import { useThemeContext } from "./theme/ThemeContext"; // novo hook
import { Container } from "./components/Container/Container";
import { useSidebar } from "./hooks/useValidateSidebar";
import { useIsLoginPage } from "./hooks/useIsLoginPage";

interface AppProps {
  children: React.ReactNode;
}

export function App({ children }: AppProps) {
  const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
  const { isDark, toggleTheme } = useThemeContext();
  const isLoginPage = useIsLoginPage();

  return (
    <>
      {!isLoginPage && (
        <>
          <Header
            isDark={isDark}
            toggleTheme={toggleTheme}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        </>
      )}
      <Container onClick={sidebarOpen ? closeSidebar : undefined}>
        {children}
      </Container>
    </>
  );
}
