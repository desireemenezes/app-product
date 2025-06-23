import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useProductStore } from "../../../../shared/products/store/useProductStore";
import { Title } from "./BrandChart.styles";
import { Card } from "../CategoryCard/CategoryCard.styles";

export function BrandChart() {
  const products = useProductStore((state) => state.products);

  const topBrands = useMemo(() => {
    const brandCount: Record<string, number> = {};

    products.forEach(({ brand }) => {
      if (brand) {
        brandCount[brand] = (brandCount[brand] || 0) + 1;
      }
    });

    return Object.entries(brandCount)
      .sort((a, b) => b[1] - a[1]) // descrescente
      .slice(0, 5)
      .map(([brand, count]) => ({ brand, count }));
  }, [products]);

  return (
    <>
      <Card>
        <Title>Top 5 Marcas Mais Populares</Title>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart layout="vertical" data={topBrands}>
            <XAxis type="number" />
            <YAxis dataKey="brand" type="category" width={120} />
            <Tooltip />
            <Bar dataKey="count" fill="#8fb6ff" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
}
