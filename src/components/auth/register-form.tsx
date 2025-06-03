'use client'

import { AppRoutes, useRegister } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { AuthWrapper } from './auth-wrapper'

const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Имя должно содержать хотя бы 3 символа' })
    .max(32, { message: 'Имя должно содержать не более 32 символов' }),
  email: z.string().email({ message: 'Введи корректный адрес электронной почты' }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
    .max(128, { message: 'Пароль должен содержать не более 128 символов' }),
})

type RegisterFormSchema = z.infer<typeof registerSchema>

export function RegisterForm() {
  const router = useRouter()

  const { mutate, isPending } = useRegister()

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: RegisterFormSchema) {
    await mutate(data, {
      onSuccess: () => {
        router.push(AppRoutes.EMAIL_NOTIFICATION)
        toast.success('Письмо с подтверждением отправлено на почту')
      },
      onError: (error: Error) => {
        toast.error(error.message || 'Произошла ошибка при регистрации')
      },
    })
  }

  return (
    <AuthWrapper
      title='Создать аккаунт'
      description='Введи свои данные для создания аккаунта'
      link={{
        href: '/auth/login',
        title: 'Войти',
        description: 'Уже есть аккаунт?',
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder='Artem Baranov' disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
