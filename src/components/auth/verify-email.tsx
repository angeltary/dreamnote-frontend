'use client'

import { EllipsisLoader } from '@/components/ui/ellipsis-loader'
import { AppRoutes, useVerifyEmail } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

export function VerifyEmail() {
  const router = useRouter()
  const { mutate, isSuccess, isError } = useVerifyEmail()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    if (!code) {
      router.back()
      return
    }

    mutate({ code })
  }, [mutate, router])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Почта успешно подтверждена!')
      router.push(AppRoutes.LOGIN)
    }

    if (isError) {
      toast.error('Ошибка подтверждения почты')
      router.push(AppRoutes.HOME)
    }
  }, [isSuccess, isError, router])

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <EllipsisLoader />
    </div>
  )
}
