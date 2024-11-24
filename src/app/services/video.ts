import { ICreateVideo, IVideo } from 'app/interfaces/video';
import { api } from './api'

export const videosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query<IVideo[], void>({
      query: () => ({ url: '/video' }),
      providesTags: () => [
        { type: 'Videos' },
      ],
    }),
    createVideo: build.mutation<any, Partial<ICreateVideo>>({
      query: (credentials: any) => {
        return {
          url: '/video',
          method: 'POST',
          body: credentials,
        }
      }
    }),
    upload: build.mutation<any, Partial<{file: File}>>({
      query: (credentials: any) => {
        const fd = new FormData();
        fd.append('video', credentials.file, credentials.file.name)

        return {
          url: '/video/upload',
          method: 'POST',
          body: fd,
          credentials: 'include',
        }
      }
    }),
  }),
})

export const { 
  useGetVideosQuery,
  useCreateVideoMutation,
  useUploadMutation,
} = videosApi;