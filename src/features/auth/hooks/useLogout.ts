import { useNavigate } from "react-router-dom";
import { useAuthStorage } from "./useAuthStorage";

export function useLogout() {
  const { logout } = useAuthStorage();
  const navigate = useNavigate();

  return () => {
    logout();
    navigate("/auth", { replace: true });
  };
}
