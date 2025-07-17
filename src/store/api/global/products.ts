import { Product } from "@/actions/product";
import { mainApi } from ".";
import { QueryResponse } from "@/types/api";

const searchApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    searchInputProducts: builder.query<void, { search: string }>({
      query: ({ search }) => ({
        url: "/search",
        method: "GET",
        params: { search },
      }),
      providesTags: ["SearchResults"],
    }),
    searchPopular: builder.query<QueryResponse<Product[]>, { search: string }>({
      query: ({ search }) => ({
        url: `/products/search/${search}?page=0&size=20`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSearchInputProductsQuery, useSearchPopularQuery } = searchApi;
