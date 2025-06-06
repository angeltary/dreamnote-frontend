'use client'

import { useLogout } from '@/shared'
import { toast } from 'sonner'
import { Button } from '../ui/button'

export function LogoutAction() {
  const { mutate, isPending } = useLogout()

  const onSubmit = () => {
    mutate(undefined, {
      onSuccess: () => {
        toast.success('Выход из аккаунта прошел успешно')
        // router.push(AppRoutes.HOME)
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
        <div className='flex justify-between gap-3 items-start flex-col md:flex-row md:items-center'>
          <div className='flex flex-col gap-1'>
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
