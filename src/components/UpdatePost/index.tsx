import { useState } from "react"
import { useAppDispatch } from "../../hooks"
import { updatePostThunk } from "../../reducers/postSlice"

interface props {
  id: number
}

const UpdatePost = ({ id = 1 }: props) => {
  const [input, setInput] = useState({ title: "", body: "" })
  const dispatch = useAppDispatch()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setInput({ ...input, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <input type="text" placeholder="Update Title" name="title" onChange={onChange} />
      <input type="text" placeholder="Update body" name="body" onChange={onChange} />
      <button
        onClick={() => {
          dispatch(updatePostThunk(id, input))
        }}
      >
        Update
      </button>
    </div>
  )
}

export default UpdatePost
