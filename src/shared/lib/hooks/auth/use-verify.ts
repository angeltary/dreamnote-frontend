import { verify, VerifyEmailRequest } from '@/shared'
import { useMutation } from '@tanstack/react-query'

export const useVerify = () => {
  return useMutation<boolean, Error, VerifyEmailRequest>({
    mutationFn: async (data: VerifyEmailRequest) => {
      return await verify(data)
    },
  })
}
