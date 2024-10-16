import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserbackProvider } from '@userback/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserbackProvider token={import.meta.env.VITE_USERBACK_API_TOKEN_KEY}>
      <App />
    </UserbackProvider>
  </React.StrictMode>,
)
