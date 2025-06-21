import {
  SidebarContainer,
  MenuList,
  MenuItem,
  MenuLink,
  Overlay,
} from "./Sidebar.styles";
import { FaTachometerAlt, FaBoxOpen } from "react-icons/fa"; // Ícones para dashboard e produtos

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
      </SidebarContainer>
      {/* Overlay para fechar sidebar clicando fora */}
      {isOpen && <Overlay onClick={onClose} />}
    </>
  );
};
