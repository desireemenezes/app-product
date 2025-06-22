import { useLocation } from "react-router-dom";

export function useIsLoginPage() {
  const location = useLocation();
  return location.pathname === "/login";
}
