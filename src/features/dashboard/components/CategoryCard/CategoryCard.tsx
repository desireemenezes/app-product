import type { JSX } from "react";
import { useCategoryStats } from "../../../../shared/products/hooks/useCategoryStats";
import { Card, List, IconWrapper, Title } from "./CategoryCard.styles";

// Ícones por categoria
import {
  FaCheese, // Laticínios
  FaWineBottle, // Bebidas
  FaAppleAlt, // Hortifruti
  FaSoap, // Limpeza
  FaSnowflake, // Frios e congelados
  FaSeedling, // Flores e plantas
  FaShoppingCart, // Mercearia
  FaGift, // Bazar
  FaBreadSlice, // Padaria
  FaDrumstickBite, // Carnes
  FaBoxOpen, // Genérico
} from "react-icons/fa";

import { MdOutlineEmojiEmotions } from "react-icons/md"; // Perfumaria e beleza

const categoryIcons: Record<string, JSX.Element> = {
  Laticínios: <FaCheese />,
  Alimentos: <FaAppleAlt />,
  Bebidas: <FaWineBottle />,
  Hortifruti: <FaAppleAlt />,
  Limpeza: <FaSoap />,
  "Frios E Congelados": <FaSnowflake />,
  "Flores E Plantas": <FaSeedling />,
  Mercearia: <FaShoppingCart />,
  "Perfumaria E Beleza": <MdOutlineEmojiEmotions />,
  Bazar: <FaGift />,
  "Bazar E Utilidades": <FaBoxOpen />,
  Padaria: <FaBreadSlice />,
  Carnes: <FaDrumstickBite />,
};

export function CardCategorySummary() {
  const categoryCounts = useCategoryStats();

  const sortedCategories = Object.entries(categoryCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const total = sortedCategories.reduce((acc, [, count]) => acc + count, 0);

  return (
    <Card>
      <Title>Total de produtos por categoria: {total}</Title>
      <List>
        {sortedCategories.map(([category, count]) => {
          const icon = categoryIcons[category] || <FaBoxOpen />;

          return (
            <li key={category}>
              <IconWrapper>{icon}</IconWrapper>
              {category}: {count} {count === 1 ? "produto" : "produtos"}
            </li>
          );
        })}
      </List>
    </Card>
  );
}
