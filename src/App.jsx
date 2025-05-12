import { useState } from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';
import './App.css' 

import Aleatorios from './componentes/aleatorios' 
import Capturados from './componentes/capturados' 
import Favoritos from './componentes/favoritos' 
import Lista from './componentes/lista' 
import Pokemon from './componentes/pokemon' 
import Usuarios from './componentes/usuarios' 
import Menu from './componentes/menu'

function App() { 
  return ( 
    <AppProvider>
      <Router>
        
        <Menu />

        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/aleatorios" element={<Aleatorios />} />
          <Route path="/capturados" element={<Capturados />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/Pokemon/:name" element={<Pokemon />} />
        </Routes>
      </Router> 
    </AppProvider> 
  ) 
} 
export default App