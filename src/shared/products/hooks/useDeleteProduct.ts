import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../../services/axiosInstance";
import { toast } from "react-toastify";
import { useProductStore } from "../store/useProductStore";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { products, setProducts } = useProductStore.getState();

  return useMutation({
    mutationFn: async (id: number) => {
      await axiosInstance.delete(`/products/${id}`);
    },
    onSuccess: (_, id) => {
      // Atualiza Zustand
      const updated = products.filter((product) => product.id !== id);
      setProducts(updated);

      // Atualiza React Query
      queryClient.invalidateQueries({ queryKey: ["products-paged"] });

      toast.success("Produto deletado com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao deletar produto.");
      console.error(error);
    },
  });
}
