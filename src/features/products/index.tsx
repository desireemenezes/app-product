import { useProductsQuery } from "../../shared/products/hooks/useProducts";
import { Title } from "../dashboard";

function Products() {
  const { data, isLoading } = useProductsQuery();

  if (isLoading) return <p>Carregando produtos...</p>;

  return (
    <main>
      <Title>Produtos</Title>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export default Products;
