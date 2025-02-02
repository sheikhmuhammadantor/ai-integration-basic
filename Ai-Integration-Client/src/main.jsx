import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import GenText from './pages/GenText.jsx';
import GenImage from './pages/GenImage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="text" element={<GenText />} />
          <Route path="image" element={<GenImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
