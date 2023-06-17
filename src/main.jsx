import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider className="max-w-full">
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>


  </React.StrictMode>,
)
