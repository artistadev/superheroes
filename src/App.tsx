import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';
import './App.css'

import Home from './app/home/home'
import Character from './app/character/character'

function App() {

  return (
    <>
      Superheroes project
      <Home />
      <Character />
    </>
  )
}

export default App
