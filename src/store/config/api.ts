/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "@/lib/auth/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const baseURL = "https://jsonplaceholder.typicode.com/"

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  credentials: "omit",
  prepareHeaders: async (headers) => {
    await msalInstance.initialize();
    const accounts = msalInstance.getAllAccounts();
    const authInstance = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
    });
    if (authInstance?.accessToken) {
      headers.set("authorization", `Bearer ${authInstance.accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {

  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [
  ],
  endpoints: (_builder) => ({}),
});

