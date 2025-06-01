'use client'

import { Button } from '@/components/shared/button'
import { AppRoutes, useGetMe } from '@/shared'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UserMenu } from './user-menu'

export function NavMenu() {
  const { user, isLoading } = useGetMe()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || isLoading) {
    return
  }

  return (
    <>
      {user ? (
        <div className='flex items-center gap-2'>
          <UserMenu />
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          <Button variant='ghost' asChild>
            <Link href={AppRoutes.LOGIN}>Войти</Link>
          </Button>
          <Button asChild>
            <Link href={AppRoutes.REGISTER}>Зарегистрироваться</Link>
          </Button>
        </div>
      )}
    </>
  )
}
