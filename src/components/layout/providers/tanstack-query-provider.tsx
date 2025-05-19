'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function TanstackQueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    }),
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
