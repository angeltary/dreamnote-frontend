import { resetPassword } from '@/shared/api/auth'
import { ResetPasswordRequest } from '@/shared/types'
import { useMutation } from '@tanstack/react-query'

export const useResetPassword = () => {
  return useMutation<boolean, Error, ResetPasswordRequest>({
    mutationFn: async (data: ResetPasswordRequest) => {
      return await resetPassword(data)
    },
  })
}
