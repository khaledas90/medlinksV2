"use server";
import { fetcher } from "@/utils/fetcher";

export interface Category {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  imagePath: string;
  imageUrl: string;
  categoryId: number;
  categoryTypeId: number;
  discount: number;
  price: number;
  rent: number;
  type: number;
  active: boolean;
  serviceCategory: boolean;
}
export const getCategoriesTypes = async ({
  type,
}: {
  type: number | string;
}) => {
  try {
    const res = await fetcher<Category[]>(`categories/type/${type}`, {
      next: {
        tags: ["Categories"],
      },
    });
    return res;
  } catch (err) {
    return null;
  }
};

export const getAllCategory = async () => {
  try {
    const res = await fetcher<Category[]>(`categories`, {
      next: {
        tags: ["Categories"],
      },
    });
    return res;
  } catch (err) {
    return null;
  }
};
