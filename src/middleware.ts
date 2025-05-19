import { AppRoutes, StorageKeys } from '@/shared'
import { type NextRequest, NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
  const { cookies, url } = request

  const accessToken = cookies.get(StorageKeys.ACCESS_TOKEN)?.value

  if (url.includes(AppRoutes.AUTH)) {
    if (accessToken) {
      return NextResponse.redirect(new URL(AppRoutes.HOME, url))
    }
    return NextResponse.next()
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL(AppRoutes.LOGIN, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/account/:path*'],
}
