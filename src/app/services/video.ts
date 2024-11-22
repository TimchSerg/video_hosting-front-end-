import { api } from './api'

export const videosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.mutation<any, null>({
      query: () => {
        return {
          url: '/video',
          method: 'GET',
        };
      },
    }),
  }),
})

export const { 
  useGetVideosMutation,
} = videosApi;