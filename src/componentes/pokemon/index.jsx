import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom"; 
import './style.css'

function Pokemon() {
  const { name } = useParams();
  const [datapoke, setDatapoke] = useState([]);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(responseData => setDatapoke(responseData))
      .catch(error => console.error("Error:", error));
  }, [name]); 
  if (!datapoke || !datapoke.id) return <p>Cargando...</p>;
  return (
    <div className={datapoke.types[0].type.name}>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${datapoke.id}.png`} 
        alt={datapoke.name} 
        width="200"
      />

        <p>{datapoke.name}</p>
        {datapoke.types && (
          <p>Tipo(s): {datapoke.types.map(t => t.type.name).join(', ')}</p>
        )}
        <p>{datapoke.id}</p>
        <p>Altura: {datapoke.height/ 10} m / Peso: {datapoke.weight/ 10} kg</p>

        <p>hp: {datapoke.stats[0].base_stat}</p>
        <p>Velocidad: {datapoke.stats[5].base_stat}</p>
        <p>Ataque: {datapoke.stats[1].base_stat} Defensa: {datapoke.stats[2].base_stat}</p>
        <p>Ataque Especial: {datapoke.stats[3].base_stat} Defensa Especial: {datapoke.stats[4].base_stat}</p>

    </div>
  );
}

export default Pokemon