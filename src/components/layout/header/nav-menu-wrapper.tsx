'use client'

import { useGetMe } from '@/shared'
import { useEffect, useState } from 'react'
import { DesktopNavMenu } from './desktop-nav-menu'
import { MobileNavMenu } from './mobile-nav-menu'

export function NavMenuWrapper() {
  const { user, isLoading } = useGetMe()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || isLoading) {
    return
  }

  return (
    <div className='flex items-center gap-4'>
      <div className='hidden items-center space-x-4 md:flex'>
        <DesktopNavMenu user={user} />
      </div>
      <div className='md:hidden'>
        <MobileNavMenu user={user} />
      </div>
    </div>
  )
}
