import { StorageKeys } from '@/shared/constants/storage-keys'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
  return Cookies.get(StorageKeys.ACCESS_TOKEN)
}
