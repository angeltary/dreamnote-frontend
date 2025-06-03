import { Button } from '@/components/ui/button'
import { AppRoutes } from '@/shared'
import Link from 'next/link'

export function UserMenu() {
  return (
    <Button asChild>
      <Link href={AppRoutes.ACCOUNT}>Профиль</Link>
    </Button>
  )
}
