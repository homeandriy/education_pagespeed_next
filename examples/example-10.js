import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useUser = () => ({ user: null, loading: false })
const useAuth = () => {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login')
    }
  }, [user, loading])

  return {
    user,
  }
}

export default function Page() {
  const { user } = useAuth();

  return <p>{ user && user.name }</p>
}