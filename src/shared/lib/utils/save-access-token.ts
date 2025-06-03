import { APP_DOMAIN } from '@/shared/constants/env'
import { StorageKeys } from '@/shared/constants/storage-keys'
import Cookies from 'js-cookie'

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(StorageKeys.ACCESS_TOKEN, accessToken, {
    domain: APP_DOMAIN,
    sameSite: 'strict',
    expires: 1,
  })
}
