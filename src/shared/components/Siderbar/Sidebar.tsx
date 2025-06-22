import {
  SidebarContainer,
  MenuList,
  MenuItem,
  MenuLink,
  Overlay,
  LogoutButton,
} from "./Sidebar.styles";
import { FaTachometerAlt, FaBoxOpen } from "react-icons/fa"; // Ícones para dashboard e produtos
import { Link } from "react-router-dom";
import { useLogout } from "../../../features/auth/hooks/useLogout";

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
            <MenuLink as={Link} to="/dashboard">
              <FaTachometerAlt style={{ marginRight: "8px" }} />
              Dashboard
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={Link} to="/products">
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
