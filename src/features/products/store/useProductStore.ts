import { create } from "zustand";
import type { IProduct } from "../types";

interface ProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
