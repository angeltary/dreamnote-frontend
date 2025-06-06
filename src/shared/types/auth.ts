export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface RegisterResponse {
  message: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
}

export interface LogoutResponse {
  success: boolean
}
