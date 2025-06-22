import { Header } from "./shared/components/Header/Header";
import { Sidebar } from "./shared/components/Siderbar/Sidebar";
import { useThemeContext } from "./shared/theme/ThemeContext"; // novo hook
import { Container } from "./shared/components/Container/Container";
import { useSidebar } from "./shared/hooks/useValidateSidebar";
import { useIsLoginPage } from "./shared/hooks/useIsLoginPage";

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
