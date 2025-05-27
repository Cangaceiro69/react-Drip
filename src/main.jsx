import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Carrossel from './components/Carrossel.jsx'
import ProductDisplay from './components/ProductDisplay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductDisplay/>
    <Carrossel/>
    <App />
    <Footer/>
  </StrictMode>,
)
