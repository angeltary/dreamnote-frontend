import { queryOptions } from '@tanstack/react-query'
import { ApiRoutes } from '../constants'
import { User } from '../types'
import { instance } from './api-instance'

export const getMe = async () => {
  const response = (await instance.get<User>(ApiRoutes.ME)).data

  return response
}

export const getMeQueryOptions = () => {
  return queryOptions({
    queryKey: ['me'],
    queryFn: () => getMe(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000,
  })
}
