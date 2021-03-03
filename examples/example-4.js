import { useRouter } from 'next/router'

// Current page => pages/post/[pid].js
const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post