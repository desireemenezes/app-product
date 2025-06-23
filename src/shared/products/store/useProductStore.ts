import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import type { IProduct } from "../types";

interface ProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

export const useProductStore = create<ProductStore>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        setProducts: (products) => set({ products }),
      }),
      {
        name: "product-storage", // Nome da chave no localStorage
      }
    ),
    {
      name: "ProductStore", // Nome que aparecerá no Devtools
    }
  )
);
