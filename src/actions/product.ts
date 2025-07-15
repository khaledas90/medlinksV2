import { QueryResponse } from "@/types/api";
import { fetcher } from "@/utils/fetcher";

export interface Product {
  id: number;
  categoryId: number;
  categoryTypeId: number;
  discount: number;
  imagePath: string;
  name: string;
  nameAr: string;
  price: number;
  rent: number;
  rating: number;
}

export const getProducts = async ({ categoryId }: { categoryId: string }) => {
  try {
    const res = await fetcher<QueryResponse<Product[]>>(
      `categories/${categoryId}`,
      {
        next: {
          tags: ["Products"],
        },
      }
    );
    return res;
  } catch (err) {
    return null;
  }
};
