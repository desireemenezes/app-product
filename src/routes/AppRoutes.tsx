import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../features/dashboard";
import { Suspense, lazy } from "react";

const Products = lazy(() => import("../features/products"));

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<p>Carregando...</p>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
