import { AppRoutes } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: number
}

export function Logo({ size = 48 }: LogoProps) {
  return (
    <Link href={AppRoutes.HOME} className='flex items-center gap-2 justify-center'>
      <Image src='/logo.svg' alt='logo' width={size} height={size} className='rounded-md' />
      <h1 className='bg-gradient-to-br from-primary from-30% via-primary/90 to-primary/70 bg-clip-text font-bold text-3xl text-transparent'>
        Dreamnote
      </h1>
    </Link>
  )
}
