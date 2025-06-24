import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "../shared/components/Loading/Loading";
import { AuthPage } from "../features/auth/AuthPage";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Products } from "../features/products";

const Dashboard = lazy(() => import("../features/dashboard"));

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
