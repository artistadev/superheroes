
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import App from './App.tsx'
import Home from './components/home/home.tsx';
import Character from './components/character/character.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />

      <Route path="/" element={<Home />} />

      <Route path="/character" element={<Character />} />
    </Routes>
  </BrowserRouter>,
)
