import { AppRoutes } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface AuthWrapperProps {
  children: ReactNode
  title: string
  description: string
  link: {
    href: string
    title: string
    description: string
  }
}

export function AuthWrapper({ children, title, description, link }: AuthWrapperProps) {
  return (
    <div className='container relative flex min-h-svh w-full flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col p-10 text-primary lg:flex'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70'></div>
      </div>

      <div className='w-full px-4 py-8 sm:px-6 md:py-12'>
        <div className='mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-5'>
          <Link href={AppRoutes.HOME} className='flex items-center gap-2 justify-center'>
            <Image src='/logo.svg' alt='logo' width={48} height={48} className='rounded-md' />
            <h1 className='bg-gradient-to-br from-primary from-30% via-primary/90 to-primary/70 bg-clip-text font-bold text-3xl text-transparent'>
              Dreamnote
            </h1>
          </Link>

          <div className='flex flex-col space-y-3'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='text-sm text-muted-foreground'>{description}</p>
          </div>
          <div className='p-0'>{children}</div>

          <p className='text-center text-sm text-muted-foreground'>
            {link.description}{' '}
            <Link href={link.href} className='font-medium text-primary'>
              {link.title}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
