'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AppRoutes, User } from '@/shared'
import { Pencil, Settings } from 'lucide-react'
import Link from 'next/link'

interface DesktopNavMenuProps {
  user: User | undefined
}

export function DesktopNavMenu({ user }: DesktopNavMenuProps) {
  return (
    <div className='flex items-center gap-2'>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='relative size-10 rounded-full'>
              <Avatar className='size-10'>
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end'>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>{user.name}</p>
                <p className='text-xs leading-none text-muted-foreground'>{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href={AppRoutes.ACCOUNT}>
                  <Pencil />
                  Заметки
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={AppRoutes.ACCOUNT}>
                  <Settings />
                  Настройки
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Button variant='ghost' asChild>
            <Link href={AppRoutes.LOGIN}>Войти</Link>
          </Button>
          <Button asChild>
            <Link href={AppRoutes.REGISTER}>Зарегистрироваться</Link>
          </Button>
        </>
      )}
    </div>
  )
}
