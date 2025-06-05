import { ApiRoutes } from '@/shared/constants/api-routes'
import { removeAccessToken } from '@/shared/lib/utils/remove-access-token'
import { saveAccessToken } from '@/shared/lib/utils/save-access-token'
import {
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  VerifyEmailRequest,
} from '@/shared/types'
import { instance } from './api-instance'

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

export const verifyEmail = async (data: VerifyEmailRequest) => {
  const response = (await instance.post<boolean>(ApiRoutes.VERIFY, data)).data

  return response
}

export const resetPassword = async (data: ResetPasswordRequest) => {
  const response = (await instance.post<boolean>(ApiRoutes.RESET_PASSWORD, data)).data

  return response
}
