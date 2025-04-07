import { useState } from 'react' 
import './App.css' 
import Aleatorios from './componentes/aleatorios' 
import Captutados from './componentes/capturados' 
import Favoritos from './componentes/favoritos' 
import Lista from './componentes/lista' 
import Pokemon from './componentes/pokemon' 
import Usuarios from './componentes/usuarios' 
import { Route, Router, Routes } from 'react-router-dom'
function App() { 
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Aleatorios/>} />
        <Route path="/" element={<Captutados/>} />
        <Route path="/" element={<Favoritos/>} />
        <Route path="/" element={<Lista/>} />
        <Route path="/" element={<Usuarios/>} />
      </Routes>
    </Router>  
  ) 
} 
export default App