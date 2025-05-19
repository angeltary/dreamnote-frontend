import { SiteHeader } from '@/components/layout/header/site-header'
import { AuthGuard } from '@/components/layout/providers/auth-guard'
import type { ReactNode } from 'react'

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <SiteHeader />
      <div className='mx-auto flex max-w-screen-xl py-10 px-4 sm:px-6 lg:px-8'>
        {children}
      </div>
    </AuthGuard>
  )
}
