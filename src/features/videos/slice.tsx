import { createSlice } from '@reduxjs/toolkit'
import { IVideo } from 'app/interfaces/video'
import { videosApi } from 'app/services/video'

type VideosState = {
  list: IVideo[],
}

const initialState = {
  list: [],
  questionnaire: [],
}

const slice = createSlice({
  name: 'videos',
  initialState: initialState as VideosState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        videosApi.endpoints.getVideos.matchFulfilled,
        (state, { payload }) => {
          state.list = payload
        }
      )
  },
})

export const { } = slice.actions // eslint-disable-line

export default slice.reducer;