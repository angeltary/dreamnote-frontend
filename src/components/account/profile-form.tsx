'use client'

import { User } from '@/shared'
import { Skeleton } from '../shared/skeleton'

interface ProfileFormProps {
  user: User | undefined
}

export function ProfileForm({ user }: ProfileFormProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg'>Профиль</h2>
      <div className='border border-border rounded-md p-4'>
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-md font-medium'>Имя</h3>
            {user ? (
              <p className='text-sm text-muted-foreground'>{user.name}</p>
            ) : (
              <Skeleton className='h-5 w-32' />
            )}
          </div>

          <div>
            <h3 className='text-md font-medium'>Почта</h3>
            {user ? (
              <p className='text-sm text-muted-foreground'>{user.email}</p>
            ) : (
              <Skeleton className='h-5 w-32' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
