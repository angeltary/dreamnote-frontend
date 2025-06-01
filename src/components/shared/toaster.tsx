'use client'

import { Toaster as Sonner } from 'sonner'

export function Toaster() {
  return (
    <Sonner
      theme='light'
      className='toaster group tracking-wide'
      style={{ fontFamily: 'var(--font-sans)' }}
      richColors
    />
  )
}
