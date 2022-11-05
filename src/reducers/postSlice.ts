/* eslint-disable @typescript-eslint/no-unused-vars */
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
    },
    createPost: (state, action) => {
      state.value.unshift(action.payload)
    },
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload)
    },
    updatePost: (state, action) => {
      const index = state.value.findIndex((post) => post.id === action.payload.id)
      state.value[index] = { ...state.value[index], ...action.payload }
    }
  }
})

//Thunk function to get Posts from from API
const getPosts = () => async (dispatch: AppDispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  dispatch(setPosts(data))
}

//Thunk function to create a new post
const createPostThunk = (input: Object) => async (dispatch: AppDispatch) => {
  //This is just a mock API call to create a new post, it won't do anything
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      ...input
    })
  })
  const data = await response.json()
  dispatch(createPost(input))
}

//Thunk function to delete a new post
const deletePostThunk = (id: number) => async (dispatch: AppDispatch) => {
  //This is just a mock API call to delete a post, it won't do anything
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE"
  })
  const data = await response.json()
  dispatch(deletePost(id))
}

//Thunk function to Update a  post
const updatePostThunk = (id: number, input: Object) => async (dispatch: AppDispatch) => {
  //This is just a mock API call to udpate a post, it won't do anything
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...input
    })
  })

  const data = await response.json()
  dispatch(updatePost({ ...input, id }))
}

export { getPosts, createPostThunk, deletePostThunk, updatePostThunk }

export const { setPosts, createPost, deletePost, updatePost } = postSlice.actions

export default postSlice.reducer
