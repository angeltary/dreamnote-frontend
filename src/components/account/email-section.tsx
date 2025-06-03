import { User } from '@/shared'
import { Mail } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'

interface EmailSectionProps {
  user: User | undefined
}

export function EmailSection({ user }: EmailSectionProps) {
  return (
    <div className='mr-5 flex w-full items-start gap-x-4 md:w-auto md:items-center'>
      <div className='hidden rounded-full bg-primary p-2.5 md:flex'>
        <Mail className='size-5 stroke-[1.7px] text-white' />
      </div>
      <div className='flex w-full flex-col'>
        <div className='mb-1 flex items-center gap-2'>
          <h2 className='font-semibold'>Почта</h2>
        </div>
        <div className='flex flex-row gap-1 text-sm text-muted-foreground'>
          Твоя учетная запись привязана к адресу{' '}
          {user ? (
            <span className='font-medium text-primary'>{user?.email}</span>
          ) : (
            <Skeleton className='h-5 w-32' />
          )}
        </div>
      </div>
    </div>
  )
}
