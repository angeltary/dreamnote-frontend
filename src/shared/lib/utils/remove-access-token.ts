import { StorageKeys } from '@/shared/constants/storage-keys'
import Cookies from 'js-cookie'

export const removeAccessToken = () => {
  Cookies.remove(StorageKeys.ACCESS_TOKEN)
}
