'use client'

import { AppRoutes, useLogout } from '@/shared'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '../shared/button'

export function LogoutAction() {
  const router = useRouter()

  const { mutate, isPending } = useLogout()

  const onSubmit = () => {
    mutate(undefined, {
      onSuccess: () => {
        router.push(AppRoutes.HOME)
        toast.success('Выход из аккаунта прошел успешно')
      },
      onError: (error: Error) => {
        toast.error(error.message || 'Произошла ошибка при выходе из аккаунта')
      },
    })
  }

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg'>Действия</h2>
      <div className='border border-border rounded-md p-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-md font-medium'>Выход</h3>
            <p className='text-sm text-muted-foreground'>
              Выйти из аккаунта на этом устройстве
            </p>
          </div>
          <Button type='submit' onClick={onSubmit} disabled={isPending}>
            Выйти
          </Button>
        </div>
      </div>
    </div>
  )
}
