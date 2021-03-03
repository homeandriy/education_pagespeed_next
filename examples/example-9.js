import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return <span onClick={() => router.replace('/home')}>Click me</span>
}