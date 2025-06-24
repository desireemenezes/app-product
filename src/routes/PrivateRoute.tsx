import { Navigate } from "react-router-dom";
import { useAuthStorage } from "../features/auth/hooks/useAuthStorage";
import { SplashScreen } from "../shared/components/SplashScreen/SplashScreen";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated, isAuthLoading } = useAuthStorage();

  if (isAuthLoading) return <SplashScreen />; // ou Loading

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <>{children}</>;
}
