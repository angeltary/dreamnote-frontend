'use client'

import { useGetMe } from '@/shared'
import { useEffect, useState } from 'react'
import { LogoutAction } from './logout-action'
import { ProfileForm } from './profile-form'

export function AccountSettings() {
  const { user } = useGetMe()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return
  }

  return (
    <div className='flex flex-col gap-8 w-full'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl'>Настройки аккаунта</h1>
        <p className='text-muted-foreground text-sm'>Управление своим аккаунтом</p>
      </div>
      <ProfileForm user={user} />
      <LogoutAction />
    </div>
  )
}
