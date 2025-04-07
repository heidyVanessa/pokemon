import { useState } from 'react' 
import './App.css' 
import Aleatorios from './componentes/aleatorios' 
import Captutados from './componentes/capturados' 
import Favoritos from './componentes/favoritos' 
import Lista from './componentes/lista' 
import Pokemon from './componentes/pokemon' 
import Usuarios from './componentes/usuarios' 
function App() { 
  return ( 
    <> 
    <h1>app</h1> 
    <Aleatorios /> 
    <Captutados /> 
    <Favoritos /> 
    <Lista /> 
    <Pokemon /> 
    <Usuarios /> 
    </> 
  ) 
} 
export default App