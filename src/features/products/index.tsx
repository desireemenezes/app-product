import { Title } from "../dashboard";
import { SkeletonTable } from "./components/Skeleton/SkeletonTable";
import { ProductsTable } from "./components/ProductsTable/ProductsTable";
import { Pagination } from "./components/Pagination/Pagination";
import { useIsMobile } from "../../shared/hooks/useIsMobile";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { DeleteModal } from "./components/Modals/DeleteModal";
import { useProducts } from "../../shared/products/hooks/useProducts";

export function Products() {
  const isMobile = useIsMobile();
  const {
    page,
    setPage,
    filter,
    setFilter,
    productToDelete,
    setProductToDelete,
    filteredProducts,
    isLoading,
    totalPages,
    handleDelete,
    confirmDelete,
  } = useProducts(10);

  return (
    <main>
      <Title>Produtos</Title>

      {isLoading ? (
        <SkeletonTable rows={10} />
      ) : (
        <>
          {isMobile ? (
            <ProductsList
              products={filteredProducts}
              onDelete={handleDelete}
              onEdit={(id) => console.log("Editar", id)}
            />
          ) : (
            <ProductsTable
              products={filteredProducts}
              onDelete={handleDelete}
              onEdit={(id) => console.log("Editar", id)}
              onAdd={() => console.log("Adicionar")}
              filterValue={filter}
              onFilterChange={setFilter}
            />
          )}
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </>
      )}

      <DeleteModal
        isOpen={!!productToDelete}
        onClose={() => setProductToDelete(null)}
        onConfirm={confirmDelete}
        productName={productToDelete?.name}
      />
    </main>
  );
}
