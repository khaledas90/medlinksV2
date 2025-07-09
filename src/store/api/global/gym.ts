import { QueryResponse } from "@/types/api";
import { mainApi } from ".";

export interface Gym {
  id?: string|undefined;
  name?: string|undefined;
  description?: string|undefined;
  logo?: string|undefined ;
  website?: string|undefined ;
  email?: string|undefined ;
  phone?: string|undefined ;
  address?: string|undefined ;
  city?: string|undefined ;
  state?: string|undefined ;
  zipCode?: string|undefined ;
  country?: string|undefined ;
  primaryColor?: string|undefined ;
  secondaryColor?: string|undefined ;
  isPublicProfile?: boolean|undefined ;
}

export const api = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getGym: builder.query<
      QueryResponse<Gym>,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `gym/${id}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              { type: 'Gym' as const, id: result.data.id },
              { type: 'Gym' as const, id: 'LIST' },
            ]
          : [{ type: 'Gym' as const, id: 'LIST' }],
    }),
    updateGym: builder.mutation<QueryResponse<Gym>, { id: string; gymData: Gym }>({
        query: ({ id, gymData }) => ({
          url: `gym/${id}`,
          method: "PUT",
          data: gymData,
        }),
        invalidatesTags: (_, __, { id }) => [
            { type: "Gym", id: "LIST" },
            { type: "Gym", id: id },
          ],
      }),
  }),
});

export const {
  useGetGymQuery,
  useUpdateGymMutation,
} = api;