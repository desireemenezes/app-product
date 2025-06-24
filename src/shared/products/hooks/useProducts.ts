import { useState } from "react";
import { usePagedProductsQuery } from "../api";
import type { IProduct } from "../types";
import { useDeleteProduct } from "./useDeleteProduct";

export function useProducts(itemsPerPage = 10) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);
  const { data, isLoading } = usePagedProductsQuery(page, itemsPerPage);
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;

  const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteProduct();

  // Filtra produtos pelo nome ou categoria
  const filteredProducts =
    data?.products.filter((product) => {
      const query = filter.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        (typeof product.categories === "string" &&
          product.categories.toLowerCase().includes(query))
      );
    }) || [];

  const handleDelete = (id: string) => {
    const selected =
      data?.products.find((product) => String(product.id) === id) || null;

    console.log("Produto selecionado:", selected);

    setProductToDelete(selected);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id);
      setProductToDelete(null);
    }
  };

  return {
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
    isDeleting,
  };
}
