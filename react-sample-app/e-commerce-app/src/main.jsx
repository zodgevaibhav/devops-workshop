import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/login/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import AddProduct from './pages/add_product/AddProduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>        
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />

      </Routes>
    </Router>
  </StrictMode>,
)
