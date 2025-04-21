import { useState } from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css' 
import Aleatorios from './componentes/aleatorios' 
import Captutados from './componentes/capturados' 
import Favoritos from './componentes/favoritos' 
import Lista from './componentes/lista' 
import Pokemon from './componentes/pokemon' 
import Usuarios from './componentes/usuarios' 
import Menu from './componentes/menu'

function App() { 
  return ( 
    <Router>
      
      <Menu />

      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/" element={<Aleatorios/>} />
        <Route path="/" element={<Captutados/>} />
        <Route path="/" element={<Favoritos/>} />
        <Route path="/" element={<Usuarios/>} />
        <Route path="/Pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>  
  ) 
} 
export default App