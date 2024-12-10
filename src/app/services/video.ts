import { ICreateVideo, IUploadVideo, IVideo } from 'app/interfaces/video';
import { api } from './api'

export const videosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query<IVideo[], void>({
      query: () => ({ url: '/video' }),
      providesTags: () => [
        { type: 'Videos' },
      ],
    }),
    getVideoById: build.query<IVideo, string>({
      query: (id: string) => ({ url: `/video/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Videos', id }],
    }),
    getVideoByName: build.query<IVideo, string>({
      query: (name: string) => ({ url: `/video/name/${name}` }),
      providesTags: (result, error, id) => [{ type: 'Videos', id }],
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
    upload: build.mutation<IUploadVideo, Partial<any>>({
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
  useGetVideoByIdQuery,
  useGetVideoByNameQuery,
  useCreateVideoMutation,
  useUploadMutation,
} = videosApi;