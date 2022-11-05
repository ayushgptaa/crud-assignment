import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { createPostThunk } from "../../reducers/postSlice"

// interface Input {
//   title: string
//   body: string
// }

const CreatePost = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts.value)
  const id = posts.length + 1
  const [input, setInput] = useState({ id, title: "", body: "" })

  useEffect(() => {
    setInput({ ...input, id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setInput({ ...input, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <input placeholder="Enter a title" name="title" onChange={onChange}></input>
      <input placeholder="Enter a body" name="body" onChange={onChange}></input>
      <button onClick={() => dispatch(createPostThunk(input))}>Create a post</button>
    </div>
  )
}

export default CreatePost
