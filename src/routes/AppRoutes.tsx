import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../features/dashboard";
import Products from "../features/products";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>
);
