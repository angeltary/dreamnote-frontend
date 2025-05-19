'use client'

import { User } from '@/shared'
import { Mail } from 'lucide-react'
import { Skeleton } from '../shared/skeleton'

interface AccountFormProps {
  user: User | undefined
}

export function AccountForm({ user }: AccountFormProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg'>Аккаунт</h2>
      <div className='flex flex-col gap-2 border border-border rounded-md p-4'>
        <div className='mr-5 flex w-full items-start gap-x-4 md:w-auto md:items-center'>
          <div className='hidden rounded-full bg-primary p-2.5 md:flex'>
            <Mail className='size-5 stroke-[1.7px] text-white' />
          </div>
          <div className='flex w-full flex-col'>
            <div className='mb-1 flex items-center gap-2'>
              <h2 className='font-semibold'>Почта</h2>
            </div>
            <p className='text-sm text-muted-foreground'>
              Ваша учетная запись привязана к адресу{' '}
              {user ? (
                <span className='font-medium text-primary'>{user?.email}</span>
              ) : (
                <Skeleton className='h-5 w-32' />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
