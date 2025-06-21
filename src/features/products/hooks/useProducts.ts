import { useQuery } from "react-query";
import { getProducts } from "../api/index";
import { useProductStore } from "../store/useProductStore";

export const useProductsQuery = () => {
  const setProducts = useProductStore((state) => state.setProducts);

  return useQuery("products", getProducts, {
    onSuccess: (data) => setProducts(data),
  });
};
