import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { authApi, User, UserResponse } from 'app/services/auth'
import { load } from 'redux-localstorage-simple';

const savedReduce: any = load();

type AuthState = {
  isAuthenticated: boolean,
  user: User | null,
  managers: any[]
}

const slice = createSlice({
  name: 'auth',
  initialState: { 
    isAuthenticated: (savedReduce && savedReduce.auth) ? savedReduce.auth.isAuthenticated : false, 
  } as AuthState,
  reducers: {
    logout: ( state ) => {
      state.isAuthenticated = false
      state.user = null
    },
    login: ( state, action: PayloadAction<UserResponse> ) => {
      const arg = action.payload;
      if(
        arg.login === process.env.REACT_APP_LOGIN && 
        arg.password === process.env.REACT_APP_PASSWORD
      ) state.isAuthenticated = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.isAuthenticated = true
        }
      )
  },
})

export const { logout, login } = slice.actions

export default slice.reducer

export const selectAuth = (state: RootState) => state.auth.isAuthenticated
export const selectUser = (state: RootState) => state.auth.user
export const selectManagers = (state: RootState) => state.auth.managers