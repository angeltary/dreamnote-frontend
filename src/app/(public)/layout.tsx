import { SiteHeader } from '@/components/layout/header/site-header'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen'>
      <SiteHeader />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>{children}</div>
    </div>
  )
}
