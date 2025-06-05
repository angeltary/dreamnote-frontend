'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AppRoutes, User } from '@/shared'
import { Menu, Pencil, Settings } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface MobileNavMenuProps {
  user: User | undefined
}

export function MobileNavMenu({ user }: MobileNavMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='md:hidden' asChild>
        <Button variant='ghost' size='icon' className='size-10 rounded-full [&_svg]:size-5'>
          <Menu />
          <span className='sr-only'>Открыть меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col gap-2 p-6' side='left'>
        <div className='flex flex-col gap-2'>
          <SheetTitle className='text-lg'>Dreamnote</SheetTitle>
          <SheetDescription className='text-[13px]'>
            Веб-приложение для ведения заметок с гибким подходом. Создавай, редактируй и
            делись заметками с друзьями.
          </SheetDescription>
        </div>
        <div className='flex flex-col gap-2'>
          <Separator className='my-1' />
          {user ? (
            <>
              <Button
                onClick={() => {
                  setIsOpen(false)
                }}
                variant='ghost'
                size='sm'
                className='justify-start'
              >
                <Link className='flex items-center gap-2' href={AppRoutes.ACCOUNT}>
                  <Pencil />
                  Заметки
                </Link>
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false)
                }}
                variant='ghost'
                size='sm'
                className='justify-start'
              >
                <Link className='flex items-center gap-2' href={AppRoutes.ACCOUNT}>
                  <Settings />
                  Настройки
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  setIsOpen(false)
                }}
                variant='outline'
                size='sm'
              >
                <Link href={AppRoutes.LOGIN}>Войти</Link>
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false)
                }}
                size='sm'
              >
                <Link href={AppRoutes.REGISTER}>Регистрация</Link>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
