import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from './layout/MainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="login" element={<div>Login</div>} />
          <Route path="register" element={<div>Register</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
