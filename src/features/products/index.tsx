import { useProductsQuery } from "../products/hooks/useProducts";

function Products() {
  const { data, isLoading } = useProductsQuery();

  if (isLoading) return <p>Carregando produtos...</p>;

  return (
    <div>
      <h2>Produtos</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Products;
