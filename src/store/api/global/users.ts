import { QueryResponse } from "@/types/api";
import { mainApi } from ".";

interface userDetails {
  imageUrl?: string;
  name: string;
  isActive: boolean;
  userGymId: string;
}

interface AllUser {
  id: string;
  name: string;
  role: string;
}
export interface Users {
  id: string;
  profileImage: string;
  name: string;
  email: string;
  phone?: string;
  status?: string;
  roleId?: string;
  role?: string;
  gymId?: string;
  imageUrl?: string;
  gymUserId: string;
  passwordHash: string;
  createdAt: string;
  userGymId: string;
  address: string;
  bio: string;
  users: userDetails;
  updatedAt: string;
  gym: string | null;
  member: string | null;
  refreshToken: string | null;
  refreshTokenExpiryTime: string | null;
  isActive: boolean;
  isDeleted: boolean;
  attendancesCheckedIn: string | null;
  paymentsProcessed: string | null;
  ordersProcessed: string | null;
  notifications: string | null;
  auditLogs: string | null;
  managedBranches: string | null;
  branchExpensesApproved: string | null;
  tierPayments: string | null;
  paymentMethods: string | null;
  tenantSubscriptions: string | null;
  branchId: string;
  branchName: string;
}

export const api = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    GetUsers: builder.query<
      QueryResponse<Users[]>,
      {
        page: number;
        limit: number;
        pageNumber: number;
        pageSize: number;
        filterBy?: string;
        search?: string;
        status?: string;
        gymId: string;
      }
    >({
      query: ({ gymId, page, limit, search, status }) => ({
        url: `/users/search/${gymId}`,
        method: "POST",
        data: {
          pageNumber: page,
          pageSize: limit,
          search: search || null,
          filterBy: status || null,
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Users" as const,
                id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    GetUser: builder.query<QueryResponse<Users>, { id: string }>({
      query: ({ id }) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data?.id ? [{ type: "Users", id: result.data.id }] : [],
    }),
    GetAllUsers: builder.query<AllUser[], { gymId: string }>({
      query: ({ gymId }) => ({
        url: `/users/${gymId}/simple-list`,
        method: "GET",
      }),
    }),
    GetRoleUsers: builder.query<QueryResponse<void>, void>({
      query: () => ({
        url: `roles/all`,
        method: "GET",
      }),
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/users/add",
        method: "POST",
        data: newUser,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    updateUser: builder.mutation<undefined, { id: string; newUser: unknown }>({
      query: ({ newUser }) => ({
        url: "/users/edit",
        method: "PUT",
        data: newUser,
      }),
      invalidatesTags: (_, __, { id }) => [
        { type: "Users", id: "LIST" },
        { type: "Users", id: id },
      ],
    }),
    deleteUser: builder.mutation({
      query: (UserId: string) => ({
        url: `users/${UserId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetAllUsersQuery,
  useGetRoleUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = api;
