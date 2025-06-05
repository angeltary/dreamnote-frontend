import { getMeQueryOptions } from '@/shared/api/users'
import { getAccessToken } from '@/shared/lib/utils/get-access-token'
import { useQuery } from '@tanstack/react-query'

export const useGetMe = () => {
  const options = getMeQueryOptions()
  const token = getAccessToken()

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    ...options,
    enabled: !!token,
  })

  return { user, isLoading, isError }
}
