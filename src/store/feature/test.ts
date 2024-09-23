/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../config/api";


export const alertsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getTodo: builder.query<any, void>({
          query: () => ({
              url: 'todos/1',
              method: 'GET'
          }),
      })
  })
})

export const { useGetTodoQuery } = alertsApiSlice;
