import React from "react"
import {  useState } from "react"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export function decorator (Story) {
  const [queryClient] = useState(() => new QueryClient())

  return (
      <QueryClientProvider client={queryClient}>
          <Story />

          <ReactQueryDevtools />
      </QueryClientProvider>
  )
}