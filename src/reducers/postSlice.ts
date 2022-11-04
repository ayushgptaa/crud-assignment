import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppDispatch } from "../store/store"

interface PostState {
  value: Array<{
    id: number
    title: string
    body: string
  }>
}

const initialState: PostState = { value: [] }

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (
      state,
      action: PayloadAction<Array<{ id: number; title: string; body: string }>>
    ) => {
      state.value = action.payload
    }
  }
})

//Thunk function to get Posts from from API
const getPosts = () => async (dispatch: AppDispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  dispatch(setPosts(data))
}

export { getPosts }

export const { setPosts } = postSlice.actions

export default postSlice.reducer
