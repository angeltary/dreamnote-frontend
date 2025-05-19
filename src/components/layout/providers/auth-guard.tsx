'use client'

import { EllipsisLoader } from '@/components/shared/ellipsis-loader'
import { useGetMe } from '@/shared'
import { useEffect, useState, type ReactNode } from 'react'

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isLoading, isError } = useGetMe()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return
  }

  if (isLoading || isError) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <EllipsisLoader />
      </div>
    )
  }

  return children
}
