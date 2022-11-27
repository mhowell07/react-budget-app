import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// library imports
import 'bootstrap/dist/css/bootstrap.min.css';

// custom contexts
import { BudgetsProvider } from './contexts/BudgetsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>
)
