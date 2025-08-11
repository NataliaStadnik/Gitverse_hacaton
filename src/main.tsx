import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './normalize.css'
import './index.scss'
import App from './App.tsx'
import {ThemeProvider} from '@/shared'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Gitverse_hacaton">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
