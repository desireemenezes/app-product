import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: JSX.Element;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
