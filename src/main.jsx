import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CloysterVisas from './cloyster-visas/CloysterVisas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CloysterVisas />
  </StrictMode>,
)