import { Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "../shared/components/Loading/Loading";
import { Suspense, lazy } from "react";
import { RequireAuth } from "./RequireAuth";
import { AuthPage } from "../features/auth/AuthPage";
import { PublicRoute } from "./PublicRoute";

const Dashboard = lazy(() => import("../features/dashboard"));
const Products = lazy(() => import("../features/products"));

export const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route
        path="/products"
        element={
          <RequireAuth>
            <Products />
          </RequireAuth>
        }
      />

      {/* Redireciona raiz para /auth */}
      <Route path="/" element={<Navigate to="/auth" replace />} />
      {/* Rota coringa */}
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  </Suspense>
);
