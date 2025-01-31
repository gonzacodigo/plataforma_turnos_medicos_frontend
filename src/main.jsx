import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../public/css/estilos.css'
import '../public/css/bootstrap.min.css'
import '../public/js/bootstrap.bundle.min.js'
import '../public/js/bootstrap.min.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
