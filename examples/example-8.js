import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  // pages/post/[pid].js
  return <span onClick={() => router.push('/post/abc')}>Click me</span>
}