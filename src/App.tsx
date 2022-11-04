import { useEffect } from "react"
import Posts from "./components/Posts"
import { useAppDispatch } from "./hooks"
import { getPosts } from "./reducers/postSlice"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return <Posts />
}

export default App
