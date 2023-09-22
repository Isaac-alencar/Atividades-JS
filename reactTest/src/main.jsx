import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App1.jsx'
import './index.css'
import { ApiLolProvider } from './contexts/apiLolContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiLolProvider>
        <App />
    </ApiLolProvider>
  </React.StrictMode>,
)
