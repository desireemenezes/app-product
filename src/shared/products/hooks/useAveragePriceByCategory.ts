import { useMemo } from "react";
import { useProductStore } from "../store/useProductStore";

export function useAveragePriceByCategory() {
  const products = useProductStore((state) => state.products);

  return useMemo(() => {
    const sums: Record<string, { total: number; count: number }> = {};

    products.forEach(({ categories, price }) => {
      if (!sums[categories]) {
        sums[categories] = { total: 0, count: 0 };
      }
      sums[categories].total += price;
      sums[categories].count += 1;
    });

    const averages: Record<string, number> = {};
    Object.entries(sums).forEach(([category, { total, count }]) => {
      averages[category] = total / count;
    });

    return averages;
  }, [products]);
}
