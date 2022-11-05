import { useEffect } from "react"
import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"
import { useAppDispatch } from "./hooks"
import { getPosts } from "./reducers/postSlice"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <CreatePost />
      <Posts />
    </>
  )
}

export default App
