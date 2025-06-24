import { useLocation } from "react-router-dom";

export function useAuthPage() {
  const location = useLocation();
  return location.pathname === "/";
}
