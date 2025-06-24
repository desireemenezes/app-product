import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "../shared/components/Loading/Loading";
import { AuthPage } from "../features/auth/AuthPage";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

const Dashboard = lazy(() => import("../features/dashboard"));
const Products = lazy(() => import("../features/products"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};
