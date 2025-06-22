import { useLogout } from "../../hooks/useLogout";
import {
  SidebarContainer,
  MenuList,
  MenuItem,
  MenuLink,
  Overlay,
  LogoutButton,
} from "./Sidebar.styles";
import { FaTachometerAlt, FaBoxOpen } from "react-icons/fa"; // Ícones para dashboard e produtos

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const logout = useLogout();

  return (
    <>
      <SidebarContainer $isOpen={isOpen}>
        <MenuList>
          <MenuItem>
            <MenuLink href="/">
              <FaTachometerAlt style={{ marginRight: "8px" }} />
              Dashboard
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/products">
              <FaBoxOpen style={{ marginRight: "8px" }} />
              Produtos
            </MenuLink>
          </MenuItem>
        </MenuList>
        <LogoutButton onClick={logout}>Sair</LogoutButton>
      </SidebarContainer>
      {/* Overlay para fechar sidebar clicando fora */}
      {isOpen && <Overlay onClick={onClose} />}
    </>
  );
};
