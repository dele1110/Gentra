import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Register from './components/Register'
import Second from './components/Second'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Register/>
    <Second/>
  </React.StrictMode>,
)
