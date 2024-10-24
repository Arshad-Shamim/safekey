import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter} from 'react-router-dom';    //for routing..
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
