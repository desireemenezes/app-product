import { HeaderContainer, Title, MenuToggle } from "./Header.styles";
import { ToggleThemeButton } from "../../theme/ToggleThemeButton";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

export const Header = ({
  isDark,
  toggleTheme,
  toggleSidebar,
  sidebarOpen,
}: HeaderProps) => (
  <HeaderContainer>
    <MenuToggle onClick={toggleSidebar} aria-label="Toggle menu">
      {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
    </MenuToggle>
    <Title>Shopline</Title>
    <ToggleThemeButton isDark={isDark} toggleTheme={toggleTheme} />
  </HeaderContainer>
);
