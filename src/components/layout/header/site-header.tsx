import { AppRoutes } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { NavMenuWrapper } from './nav-menu-wrapper'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full transition-all duration-300 bg-background/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <Link href={AppRoutes.HOME} className='flex items-center gap-2'>
          <Image src='/logo.svg' alt='logo' width={40} height={40} className='rounded-md' />
          <h1 className='bg-gradient-to-br from-primary from-30% via-primary/90 to-primary/70 bg-clip-text font-bold text-2xl text-transparent'>
            Dreamnote
          </h1>
        </Link>
        <NavMenuWrapper />
      </div>
    </header>
  )
}
