import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { useAppSelector } from "../../hooks"
import { styled } from "@mui/material/styles"
import { useAppDispatch } from "../../hooks"
import { deletePostThunk } from "../../reducers/postSlice"
import UpdatePost from "../UpdatePost"

interface Post {
  id: number
  title: string
  body: string
}

const Item = styled(Container)(({ theme }) => ({
  height: "100%",
  borderRadius: "10px",
  backgroundColor: "#D0F2FF",
  padding: "20px",
  color: "rgb(12, 83, 183)"
}))

const Posts = () => {
  const posts = useAppSelector((state) => state.posts.value)
  const dispatch = useAppDispatch()

  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 6 }}
      sx={{ padding: "100px", justifyContent: "center", backgroundColor: "#F4F6F8" }}
    >
      {posts.map((post: Post) => (
        <Grid item key={post?.id}>
          <Item maxWidth="sm">
            <h3>{post?.title}</h3>
            <p>{post?.body}</p>
            <button
              onClick={() => {
                dispatch(deletePostThunk(post.id))
              }}
            >
              Delete Post
            </button>
            <UpdatePost id={post.id} />
          </Item>
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
