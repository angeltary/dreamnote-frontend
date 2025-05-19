'use client'

import { getAccessToken } from '@/shared'
import { useEffect, useState } from 'react'

export function useAuth() {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const token = getAccessToken()
    setIsAuthorized(token !== undefined && token !== '')
  }, [])

  return { isAuthorized }
}
