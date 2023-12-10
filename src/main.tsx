import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'
import { MantineProvider, createTheme } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const theme = createTheme({
  fontFamily: "raleway, sans-serif",
})
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
)
