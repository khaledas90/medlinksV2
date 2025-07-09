import { QueryResponse } from "@/types/api";
import { mainApi } from ".";

export interface Branch {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
  openingHours: string | Record<string, { open: string; close: string }>;
  facilities: string;
  latitude: number | null;
  longitude: number | null;
  gymId?: string;
  managerId: string;
  managerName: string | null;
  memberCount: number;
  trainerCount: number;
  status: string;
  createdAt: string;
  staffCount: number;
}

export interface BranchStats {
  totalBranches: number | null;
  activeBranches: number | null;
  totalMembers: number | null;
  totalTrainers: number | null;
}
export const api = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    GetBranches: builder.query<
      QueryResponse<Branch[]>,
      {
        page: number;
        limit: number;
        pageNumber: number;
        pageSize: number;
        filterBy?: string;
        search?: string;
        gymId: string;
        name: string;
      }
    >({
      query: ({ gymId, page, limit, search, name }) => ({
        url: `/gym/search-branches/${gymId}`,
        method: "POST",
        data: {
          pageNumber: page,
          pageSize: limit,
          search: search || null,
          filterBy: name || null,
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Branch" as const,
                id,
              })),
              { type: "Branch", id: "LIST" },
            ]
          : [{ type: "Branch", id: "LIST" }],
    }),
    GetAllBranches: builder.query<QueryResponse<Branch[]>, { gymId: string }>({
      query: ({ gymId }) => ({
        url: `/gym/get-branches/${gymId}`,
        method: "GET",
      }),
    }),
    GetBranchesStats: builder.query<
      QueryResponse<BranchStats>,
      { gymId: string }
    >({
      query: ({ gymId }) => ({
        url: `gym/branch-stats/${gymId}`,
        method: "GET",
      }),
    }),
    GetBranch: builder.query<QueryResponse<Branch>, { id: string }>({
      query: ({ id }) => ({
        url: `/gym/get-branch/${id}`,
        method: "GET",
      }),
    }),
    isBranchExceeded: builder.query<QueryResponse<void>, { gymId: string }>({
      query: ({ gymId }: { gymId: string }) => ({
        url: `/gym/is-branch-limit-exceeded/${gymId}`,
        method: "GET",
      }),
    }),
    addBranch: builder.mutation({
      query: ({ newBranch, gymId }) => ({
        url: `/gym/create-branch/${gymId}`,
        method: "POST",
        data: newBranch,
      }),
      invalidatesTags: [{ type: "Branch", id: "LIST" }],
    }),
    updateBranch: builder.mutation<
      undefined,
      { id: string; newBranch: unknown }
    >({
      query: ({ id, newBranch }) => ({
        url: `/gym/update-branch/${id}`,
        method: "PUT",
        data: newBranch,
      }),
      invalidatesTags: (_, __, { id }) => [
        { type: "Branch", id: "LIST" },
        { type: "Branch", id },
      ],
    }),
    deleteBranch: builder.mutation({
      query: (branchId: string) => ({
        url: `/gym/delete-branch/${branchId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Branch", id: "LIST" }],
    }),
  }),
});

export const {
  useGetBranchesQuery,
  useGetAllBranchesQuery,
  useGetBranchesStatsQuery,
  useGetBranchQuery,
  useIsBranchExceededQuery,
  useAddBranchMutation,
  useUpdateBranchMutation,
  useDeleteBranchMutation,
} = api;
