import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostProvider } from './contexts/PostContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </StrictMode>,
)
