import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  }

  return logout;
}
