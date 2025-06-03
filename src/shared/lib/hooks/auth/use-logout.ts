import { logout } from '@/shared/api/auth'
import { LogoutResponse } from '@/shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation<LogoutResponse, Error>({
    mutationFn: async () => {
      return await logout()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })
}
