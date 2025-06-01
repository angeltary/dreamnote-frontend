import { Logo } from '../shared/logo'

export function EmailNotification() {
  return (
    <div className='container relative flex min-h-svh w-full flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col p-10 text-primary lg:flex'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70'></div>
      </div>

      <div className='w-full px-4 py-8 sm:px-6 md:py-12'>
        <div className='mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-5'>
          <Logo />

          <div className='flex flex-col space-y-3'>
            <h1 className='text-3xl font-semibold'>Подтверди свою почту</h1>
            <p className='text-sm text-muted-foreground'>
              Мы отправили письмо на твою почту с ссылкой для подтверждения.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
