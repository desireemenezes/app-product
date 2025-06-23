import { useAveragePriceByCategory } from "../../../../shared/products/hooks/useAveragePriceByCategory";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, Title } from "../CategoryCard/CategoryCard.styles";
import { useTheme } from "styled-components";

interface DataItem {
  category: string;
  avgPrice: number;
}

export function AveragePriceChart() {
  const averages = useAveragePriceByCategory();
  const theme = useTheme(); // <- aqui

  const data: DataItem[] = Object.entries(averages).map(
    ([category, avgPrice]) => ({
      category,
      avgPrice: Number(avgPrice.toFixed(2)),
    })
  );

  data.sort((a, b) => b.avgPrice - a.avgPrice);

  return (
    <Card>
      <Title>Preço médio por categoria</Title>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            interval={0}
            angle={-35}
            textAnchor="end"
            height={70}
            tick={{
              fontSize: 12,
              fill: theme.colors.textLine, // <- tema aplicado corretamente
              fontWeight: 500,
            }}
          />
          <YAxis
            tick={{
              fontSize: 12,
              fill: theme.colors.textLine,
              fontWeight: 500,
            }}
          />
          <Tooltip
            formatter={(value: number) => `R$ ${value.toFixed(2)}`}
            contentStyle={{
              fontSize: "14px",
              color: theme.colors.text, // ou outro tom do seu tema
            }}
          />
          <Bar dataKey="avgPrice" fill="#8fb6ff" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
