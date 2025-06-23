import { useQuery } from "react-query"; // observe: 'react-query', não '@tanstack/react-query'
import { getProducts } from "../api";
import { useProductStore } from "../store/useProductStore";
import type { IProduct } from "../types";

export const useProductsQuery = () => {
  const setProducts = useProductStore((state) => state.setProducts);

  return useQuery<IProduct[], Error>(
    ["products"], // queryKey
    getProducts, // queryFn
    {
      onSuccess: (data) => {
        setProducts(data);
      },
      onError: (error) => {
        console.error("Erro ao buscar produtos:", error.message);
      },
    }
  );
};
