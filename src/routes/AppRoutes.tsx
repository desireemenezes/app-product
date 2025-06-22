import { Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "../shared/components/Loading/Loading";
import { Suspense, lazy } from "react";
import { Login } from "../features/auth/index";
import { RequireAuth } from "./RequireAuth";
import { PublicRoute } from "./PublicRoute";

const Dashboard = lazy(() => import("../features/dashboard"));
const Products = lazy(() => import("../features/products"));

export const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
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

      {/* Redireciona rota raiz para /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  </Suspense>
);
