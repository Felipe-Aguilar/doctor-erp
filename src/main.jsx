import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'

import { BrowserRouter } from 'react-router-dom'
import { ProovedorLogin } from './context/LoginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProovedorLogin>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProovedorLogin>
  </React.StrictMode>,
)
