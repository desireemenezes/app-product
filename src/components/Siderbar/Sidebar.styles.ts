import styled from "styled-components";

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  width: 180px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1); // sombra leve na direita
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
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #00000088;
  z-index: 900;
  @media (min-width: 769px) {
    display: none;
  }
`;
