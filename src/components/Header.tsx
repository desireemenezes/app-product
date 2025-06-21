import { Container, Title } from "./Header.styles";
import { ToggleThemeButton } from "../theme/ToggleThemeButton";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDark, toggleTheme }: HeaderProps) => (
  <Container>
    <Title>Shopline</Title>
    <ToggleThemeButton isDark={isDark} toggleTheme={toggleTheme} />
  </Container>
);
