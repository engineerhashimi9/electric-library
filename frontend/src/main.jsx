import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CurrentLanguageProvider from './context/language_context'
import './i18n'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentLanguageProvider>
      <App />
    </CurrentLanguageProvider>
  </StrictMode>,
)
