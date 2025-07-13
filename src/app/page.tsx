'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomeRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      router.replace('/dashboard')
    } else {
      router.replace('/auth')
    }
  }, [])

  return null 
}
