import { useState } from 'react' 
import { Route, Router, Routes } from 'react-router-dom'
import './App.css' 
import Aleatorios from './componentes/aleatorios' 
import Captutados from './componentes/capturados' 
import Favoritos from './componentes/favoritos' 
import Lista from './componentes/lista' 
import Pokemon from './componentes/pokemon' 
import Usuarios from './componentes/usuarios' 

function App() { 
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
      </Routes>
    </Router>  
  ) 
} 
export default App