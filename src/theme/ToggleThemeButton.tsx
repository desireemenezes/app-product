import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ToggleThemeButton = ({ isDark, toggleTheme }: Props) => {
  return (
    <IconButton onClick={toggleTheme} aria-label="Alternar tema">
      {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
    </IconButton>
  );
};

const IconButton = styled.button`
  position: fixed;
  right: 10px;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;
