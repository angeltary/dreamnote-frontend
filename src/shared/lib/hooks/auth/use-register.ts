import { register } from '@/shared/api/auth'
import { RegisterRequest, RegisterResponse } from '@/shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async (data: RegisterRequest) => {
      return await register(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })
}
