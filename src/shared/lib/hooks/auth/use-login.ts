import { AuthResponse, login, LoginRequest } from '@/shared'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: async (data: LoginRequest) => {
      return await login(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })
}
