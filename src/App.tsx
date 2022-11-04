import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "./hooks"
import { getPosts } from "./reducers/postSlice"

interface Post {
  id: number
  title: string
  body: string
}

function App() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts.value)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div>
      {posts.length
        ? posts.map((post: Post) => (
            <div key={post?.id}>
              <h1>{post?.title}</h1>
              <p>{post?.body}</p>
            </div>
          ))
        : "loading.."}
    </div>
  )
}

export default App
