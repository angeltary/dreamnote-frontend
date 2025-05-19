import { APP_DOMAIN, StorageKeys } from '@/shared'
import Cookies from 'js-cookie'

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(StorageKeys.ACCESS_TOKEN, accessToken, {
    domain: APP_DOMAIN,
    sameSite: 'strict',
    expires: 1,
  })
}
