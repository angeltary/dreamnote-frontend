'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/form'
import { Input } from '@/components/shared/input'
import { AppRoutes, useLogin } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../shared/button'
import { AuthWrapper } from './auth-wrapper'

const loginSchema = z.object({
  email: z.string().email({ message: 'Введи корректный адрес электронной почты' }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
    .max(128, { message: 'Пароль должен содержать не более 128 символов' }),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export function LoginForm() {
  const router = useRouter()

  const { mutate, isPending } = useLogin()

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginFormSchema) {
    await mutate(data, {
      onSuccess: () => {
        toast.success('Авторизация прошла успешно')
        router.push(AppRoutes.HOME)
      },
      onError: (error: Error) => {
        toast.error(error.message || 'Произошла ошибка при авторизации')
      },
    })
  }

  return (
    <AuthWrapper
      title='Войти в аккаунт'
      description='Введи свои данные для входа в аккаунт'
      link={{
        href: '/auth/register',
        title: 'Регистрация',
        description: 'Нет аккаунта?',
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='artem@baranindustries.com'
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
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
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
            <Button type='submit' className='w-full' disabled={isPending}>
              Продолжить
            </Button>
          </div>
        </form>
      </Form>
    </AuthWrapper>
  )
}
