import styled from "styled-components";

interface SidebarContainerProps {
  $isOpen: boolean; // o cifrão evita repassar ao DOM
}

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Empurra conteúdo e botão para o fim */

  width: 180px;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  box-shadow: 2px 0 6px ${({ theme }) =>
    theme.colors.borderColor}; // sombra leve na direita
  padding: 1rem 0;
  position: fixed;
  top: 60px; // altura do header
  bottom: 0;
  left: 0;
  overflow-y: auto;
  transition: transform 0.3s ease;

  // Desktop: sidebar sempre visível
  @media (max-width: 768px) {
    top: 0;
    height: 100%;
    z-index: 1000;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-100%)"};
  ...
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const MenuLink = styled.a`
  display: block;
  padding: 12px 24px;
  color: ${({ theme }) => theme.colors.textLabel};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderColor};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.borderColor};
  z-index: 900;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  width: calc(100% - 48px);
  margin: 1rem 24px;
  padding: 5px 0;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}cc;
  }
`;
