import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/ApiBaseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/user`,
//   credentials: "include",
//   prepareHeaders: (Headers) => {
//     const sessionJSON = localStorage.getItem("sb-ckuzvwiieggrznnksizv-auth-token");
//     const session = JSON.parse(sessionJSON);
//     const token = session.access_token;

//     if (token) {
//       Headers.set("Authorization", `Bearer ${token}`);
//     }
//     return Headers;
//   },
});

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => {
    return {
      createUser: builder.mutation({
        query: (userData) => ({
          url: "/create-user",
          method: "POST",
          body: userData,
        }),
        invalidatesTags: ["Users"],
      }),
    };
  },
});

export const { useCreateUserMutation } = userApi;
export default userApi;