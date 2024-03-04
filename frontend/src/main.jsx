import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApplicantProvider } from '../context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicantProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApplicantProvider>
  </React.StrictMode>
)
