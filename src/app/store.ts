import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { api } from './services/api'
import auth from 'features/auth/slice';
import norr from 'features/norr/slice';
import video from 'features/videos/slice';
import { rtkQueryErrorLogger } from './middleware/handleError'


export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth,
      norr,
      video
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware, rtkQueryErrorLogger),
    ...options,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>