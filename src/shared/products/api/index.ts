import { useQuery } from "react-query";
import { axiosInstance } from "../../../services/axiosInstance";
import type { IProduct } from "../types/index";

interface ApiResponse {
  products: IProduct[];
  total: number;
}

export async function getProducts(): Promise<IProduct[]> {
  const response = await axiosInstance.get<IProduct[]>("/products");
  return response.data;
}

const getProductsPagination = async (
  page: number,
  limit: number
): Promise<ApiResponse> => {
  const response = await axiosInstance.get<IProduct[]>("/products", {
    params: { _page: page, _limit: limit },
  });

  const rawHeader = response.headers["x-total-count"];
  const total = rawHeader ? Number(rawHeader) : 0;

  return {
    products: response.data,
    total,
  };
};

export const usePagedProductsQuery = (page: number, limit: number = 10) =>
  useQuery<ApiResponse, Error>(["products-paged", page], () =>
    getProductsPagination(page, limit)
  );
