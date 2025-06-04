'use client'

import { User, useResetPassword } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { KeyRound } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

interface PasswordFormProps {
  user: User | undefined
}

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, {
        message: 'Новый пароль должен содержать хотя бы 6 символов',
      })
      .max(128, {
        message: 'Новый пароль должен содержать не более 128 символов',
      }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

export type PasswordFormSchema = z.infer<typeof passwordSchema>

export function PasswordForm({ user }: PasswordFormProps) {
  const { mutate, isPending } = useResetPassword()
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<PasswordFormSchema>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  if (!user) {
    return
  }

  async function onSubmit(data: PasswordFormSchema) {
    if (!user) {
      return
    }

    await mutate(
      {
        email: user.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success('Пароль успешно обновлен')
          setIsOpen(false)
          form.reset()
        },
        onError: (error: Error) => {
          toast.error(error.message || 'Произошла ошибка при обновлении пароля')
        },
      },
    )
  }

  return (
    <div className='flex w-full items-start gap-x-4 md:w-auto md:items-center'>
      <div className='hidden rounded-full bg-primary p-2.5 md:flex'>
        <KeyRound className='size-5 stroke-[1.7px] text-white' />
      </div>
      <div className='flex w-full justify-between gap-3 items-start flex-col md:flex-row md:items-center'>
        <div>
          <div className='mb-1 flex items-center gap-2'>
            <h2 className='font-semibold'>Пароль</h2>
          </div>

          <div className='flex flex-row gap-1 text-sm text-muted-foreground'>
            Не сообщай свой пароль никому, иначе кто-то сможет получить доступ к твоему
            аккаунту.
          </div>
        </div>

        <div>
          <Dialog
            open={isOpen}
            onOpenChange={state => {
              form.reset()
              setIsOpen(state)
            }}
          >
            <DialogTrigger asChild>
              <Button>Изменить</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Обновление пароля</DialogTitle>
                <DialogDescription>
                  Введите текущий и новый пароль для обновления.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Новый пароль</FormLabel>
                        <FormControl>
                          <Input
                            type='password'
                            placeholder='******'
                            disabled={isPending}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Подтвердите новый пароль</FormLabel>
                        <FormControl>
                          <Input
                            type='password'
                            placeholder='******'
                            disabled={isPending}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant='outline'>Отмена</Button>
                    </DialogClose>
                    <Button type='submit' disabled={isPending}>
                      {isPending ? 'Обновление...' : 'Обновить'}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
