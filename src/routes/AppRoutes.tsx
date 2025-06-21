import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("../features/dashboard"));
const Products = lazy(() => import("../features/products"));

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
