// import { retry } from '@reduxjs/toolkit/query/react'
import { api } from './api'

export interface User {
  name: string
}

export interface UserResponse {
  login: string
  password: string
}

export interface LoginRequest {
  access_token: string
  refresh_token: string
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginRequest, Partial<UserResponse>>({
      query: (credentials: any) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (response) => {
        return response;
      },
      
      invalidatesTags: ['Auth'],
    })
  }),
})

export const { useLoginMutation } = authApi;
