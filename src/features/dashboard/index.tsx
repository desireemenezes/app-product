import { useEffect, useState } from "react";
import { useProductStore } from "../../shared/products/store/useProductStore";
import { getProducts } from "../../shared/products/api";
import { CardCategorySummary } from "./components/CategoryCard/CategoryCard";
import { CardsGrid } from "./components/CategoryCard/CategoryCard.styles";
import styled from "styled-components";
import { BrandChart } from "./components/BrandChart/BrandChart";
import { AveragePriceChart } from "./components/AveragePriceChart/AveragePriceChart";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textLabel};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const FadeInContainer = styled.main`
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

export default function Dashboard() {
  const setProducts = useProductStore((state) => state.setProducts);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300); // delay 300ms
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getProducts().then(setProducts);
  }, [setProducts]);

  return (
    <FadeInContainer className={visible ? "visible" : ""}>
      <Title>Dashboard</Title>
      <BrandChart />
      <CardsGrid>
        <AveragePriceChart />
        <CardCategorySummary />
      </CardsGrid>
    </FadeInContainer>
  );
}
