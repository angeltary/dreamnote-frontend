'use client'

import { User } from '@/shared'
import { Avatar, AvatarFallback } from '../shared/avatar'
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
          <div className='flex items-center gap-4'>
            {user ? (
              <Avatar className='size-14 text-2xl'>
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
            ) : (
              <Skeleton className='size-14 rounded-full' />
            )}

            <div className='flex flex-col'>
              <h2 className='text-lg font-medium'>Аватарка</h2>
              <p className='text-sm text-muted-foreground'>
                Ты можешь изменить аватарку прямо здесь
              </p>
            </div>
          </div>

          <div>
            <h3 className='text-md font-medium'>Твое имя</h3>
            {user ? (
              <p className='text-sm text-muted-foreground'>{user.name}</p>
            ) : (
              <Skeleton className='h-5 w-32' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
