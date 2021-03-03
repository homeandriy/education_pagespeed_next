import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return <span onClick={() => router.reload()}>Click here to reload</span>
}