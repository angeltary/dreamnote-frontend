'use client'

import { EllipsisLoader } from '@/components/shared/ellipsis-loader'
import { AppRoutes, useVerify } from '@/shared'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

export function VerifyEmail() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const code = searchParams.get('code')

  const { mutate, isSuccess, isError } = useVerify()

  useEffect(() => {
    if (!code) {
      router.back()
      return
    }

    mutate({ code })
  }, [code, mutate, router])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Почта успешно подтверждена!')
      router.push(AppRoutes.HOME)
    }

    if (isError) {
      toast.error('Ошибка подтверждения почты')
      router.push(AppRoutes.HOME)
    }
  }, [isSuccess, isError, router])

  return <EllipsisLoader />
}
