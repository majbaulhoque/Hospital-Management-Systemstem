import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Route}/>
  </StrictMode>,
)
