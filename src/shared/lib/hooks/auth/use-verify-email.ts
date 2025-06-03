import { verifyEmail } from '@/shared/api/auth'
import { VerifyEmailRequest } from '@/shared/types'
import { useMutation } from '@tanstack/react-query'

export const useVerifyEmail = () => {
  return useMutation<boolean, Error, VerifyEmailRequest>({
    mutationFn: async (data: VerifyEmailRequest) => {
      return await verifyEmail(data)
    },
  })
}
