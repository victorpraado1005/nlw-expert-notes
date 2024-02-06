import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { Toaster } from 'sonner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'w-full p-4 flex items-center gap-2 rounded-md text-lime-400',
          closeButton: 'bg-lime-400',
          error: 'bg-red-400 text-slate-950',
          success: 'bg-slate-800',
        }
      }}
    />
  </React.StrictMode>,
)
