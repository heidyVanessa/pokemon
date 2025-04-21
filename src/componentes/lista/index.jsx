import { useState , useEffect} from 'react'
import Filtro from '../filtro' 
import './style.css'

function Lista() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      if (tipoSeleccionado === 'All') {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
        const json = await res.json();
        setData(json.results);
      } else {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`);
        const json = await res.json();
        const listaFiltrada = json.pokemon.map(p => p.pokemon);
        setData(listaFiltrada);
      }
    }; 
    
    obtenerDatos();
  }, [tipoSeleccionado]);
  const handleTipoChange = (tipo) => {
    setTipoSeleccionado(tipo);
  };


  return (
    <>
    <Filtro onTipoChange={handleTipoChange} />
    <section className='c-lista'>
      {data.map((pokemon, index) => (
        <div className='c-lista-pokemon'
        key={index}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`} 
                alt={`Pokémon ${pokemon.name}`} width='auto' height='60' loading='lazy'
              />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default Lista