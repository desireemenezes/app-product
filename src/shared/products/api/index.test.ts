import { describe, it, expect, vi } from "vitest";
import { getProducts } from "./index";
import { axiosInstance } from "../../../services/axiosInstance";

vi.mock("../../../services/axiosInstance", () => ({
  axiosInstance: {
    get: vi.fn(),
  },
}));

describe("getProducts", () => {
  it("should return product list on success", async () => {
    const mockProducts = [
      { id: 1, name: "Produto 1", price: 100 },
      { id: 2, name: "Produto 2", price: 200 },
    ];

    (
      axiosInstance.get as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue({
      data: mockProducts,
    });

    const result = await getProducts();

    expect(axiosInstance.get).toHaveBeenCalledWith("/products");
    expect(result).toEqual(mockProducts);
  });

  it("should throw error when axiosInstance.get fails", async () => {
    const error = new Error("Network Error");

    (
      axiosInstance.get as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValue(error);

    await expect(getProducts()).rejects.toThrow("Network Error");
  });
});
