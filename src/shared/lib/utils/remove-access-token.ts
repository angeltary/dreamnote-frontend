import { StorageKeys } from '@/shared'
import Cookies from 'js-cookie'

export const removeAccessToken = () => {
  Cookies.remove(StorageKeys.ACCESS_TOKEN)
}
