import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Routes.jsx'
import FriendsProvider from './context/FriendsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
    <RouterProvider router={router}></RouterProvider>
    </FriendsProvider>
  </StrictMode>,
)
