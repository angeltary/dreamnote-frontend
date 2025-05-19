import { AreaChart, BookOpen, Code } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: <BookOpen className='size-6 text-primary' />,
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      icon: <AreaChart className='size-6 text-primary' />,
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      icon: <Code className='size-6 text-primary' />,
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
  ]

  return (
    <div className='mx-auto max-w-7xl py-10 antialiased md:py-20'>
      <div className='mx-auto w-full'>
        <h2 className='mb-4 text-center text-3xl font-semibold text-foreground md:mb-6 md:text-4xl lg:text-5xl'>
          Что тебя ждёт в Dreamnote?
        </h2>
        <p className='mx-auto mb-6 max-w-2xl text-center text-base text-muted-foreground md:mb-8 md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
        {features.map((reason, index) => (
          <div
            key={index}
            className='rounded-lg border border-none text-card-foreground shadow-none'
          >
            <div className='space-y-4 p-6'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                {reason.icon}
              </div>
              <h3 className='text-xl font-semibold'>{reason.title}</h3>
              <p className='text-base text-muted-foreground'>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
