import { useMemo } from "react";
import { useProductStore } from "../store/useProductStore";

export function useCategoryStats() {
  const products = useProductStore((state) => state.products);

  return useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach(({ categories }) => {
      counts[categories] = (counts[categories] || 0) + 1;
    });
    return counts;
  }, [products]);
}
