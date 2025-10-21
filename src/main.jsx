import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importa o CSS principal do Ant Design
import "antd/dist/reset.css"; 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)