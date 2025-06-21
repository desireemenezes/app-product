import { axiosInstance } from "../../../services/axiosInstance";
import type { IProduct } from "../types/index";

export async function getProducts(): Promise<IProduct[]> {
  const response = await axiosInstance.get<IProduct[]>("/products");
  return response.data;
}
