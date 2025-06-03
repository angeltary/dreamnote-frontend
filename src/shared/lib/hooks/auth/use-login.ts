import { login } from '@/shared/api/auth'
import { LoginRequest, LoginResponse } from '@/shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: async (data: LoginRequest) => {
      return await login(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })
}
