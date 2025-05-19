import {
  ApiRoutes,
  AuthResponse,
  instance,
  LoginRequest,
  LogoutResponse,
  RegisterRequest,
  removeAccessToken,
  saveAccessToken,
  User,
} from '@/shared'
import { queryOptions } from '@tanstack/react-query'

export const register = async (data: RegisterRequest) => {
  const response = (await instance.post<AuthResponse>('/auth/register', data)).data

  if (response.accessToken) {
    saveAccessToken(response.accessToken)
  }

  return response
}

export const login = async (data: LoginRequest) => {
  const response = (await instance.post<AuthResponse>(ApiRoutes.LOGIN, data)).data

  if (response.accessToken) {
    saveAccessToken(response.accessToken)
  }

  return response
}

export const logout = async () => {
  const response = (await instance.post<LogoutResponse>(ApiRoutes.LOGOUT)).data

  if (response) {
    removeAccessToken()
  }

  return response
}

export const refresh = async () => {
  const response = (await instance.post<AuthResponse>(ApiRoutes.REFRESH)).data

  if (response.accessToken) {
    saveAccessToken(response.accessToken)
  }

  return response
}

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
