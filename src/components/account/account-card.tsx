'use client'

import { User } from '@/shared'
import { EmailSection } from './email-section'
import { PasswordForm } from './password-form'

interface AccountCardProps {
  user: User | undefined
}

export function AccountCard({ user }: AccountCardProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg'>Аккаунт</h2>
      <div className='flex flex-col gap-4 border border-border rounded-md p-4'>
        <EmailSection user={user} />
        <PasswordForm user={user} />
      </div>
    </div>
  )
}
