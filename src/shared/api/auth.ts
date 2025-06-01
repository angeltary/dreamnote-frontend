import {
  ApiRoutes,
  instance,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  RegisterRequest,
  RegisterResponse,
  removeAccessToken,
  saveAccessToken,
  User,
  VerifyEmailRequest,
} from '@/shared'
import { queryOptions } from '@tanstack/react-query'

export const register = async (data: RegisterRequest) => {
  const response = (await instance.post<RegisterResponse>(ApiRoutes.REGISTER, data)).data

  return response
}

export const login = async (data: LoginRequest) => {
  const response = (await instance.post<LoginResponse>(ApiRoutes.LOGIN, data)).data

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
  const response = (await instance.post<LoginResponse>(ApiRoutes.REFRESH)).data

  if (response.accessToken) {
    saveAccessToken(response.accessToken)
  }

  return response
}

export const getMe = async () => {
  const response = (await instance.get<User>(ApiRoutes.ME)).data

  return response
}

export const verify = async (data: VerifyEmailRequest) => {
  const response = (await instance.post<boolean>(ApiRoutes.VERIFY, data)).data

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
