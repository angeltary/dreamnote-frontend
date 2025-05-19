import {
  API_URL,
  ApiRoutes,
  AppRoutes,
  getAccessToken,
  removeAccessToken,
  saveAccessToken,
} from '@/shared'
import axios from 'axios'

export const instance = axios.create({
  baseURL: API_URL,
})

instance.interceptors.request.use(
  config => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest.url === ApiRoutes.LOGIN) {
        return Promise.reject(error)
      }

      if (originalRequest.url === ApiRoutes.REFRESH) {
        removeAccessToken()
        window.location.replace(AppRoutes.LOGIN)
        return Promise.reject(error)
      }

      originalRequest._retry = true
      try {
        const response = await axios.post(`${API_URL}/auth/refresh`)
        const newToken = response.data.accessToken

        if (newToken) {
          saveAccessToken(newToken)
          originalRequest.headers.Authorization = `Bearer ${newToken}`
          return instance(originalRequest)
        }
      } catch (refreshError) {
        removeAccessToken()
        window.location.replace(AppRoutes.LOGIN)
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)
