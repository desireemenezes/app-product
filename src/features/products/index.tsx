import { useState } from "react";
import { Title } from "../dashboard";
import { SkeletonTable } from "./components/Skeleton/SkeletonTable";
import { ProductsTable } from "./components/ProductsTable/ProductsTable";
import { Pagination } from "./components/Pagination/Pagination";
import { usePagedProductsQuery } from "../../shared/products/api";

export function Products() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading } = usePagedProductsQuery(page, itemsPerPage);

  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;

  return (
    <main>
      <Title>Produtos</Title>

      {isLoading ? (
        <SkeletonTable rows={itemsPerPage} />
      ) : (
        <>
          <ProductsTable products={data?.products || []} />
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </>
      )}
    </main>
  );
}
