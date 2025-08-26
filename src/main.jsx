import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import Provider from './providers/Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <HelmetProvider>
            <div className='max-w-screen-xl mx-auto'>
              <RouterProvider router={router} />
            </div>
      </HelmetProvider>
      <Toaster />
    <ToastContainer/>
    </Provider>
  </React.StrictMode>
)
