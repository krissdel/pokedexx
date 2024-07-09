import React , {useState, useEffect} from 'react';


import Pokemon from './models/pokemon';
import POKEMONS from './models/mock_pokemon';


const App = () => {

// const [name, setName] = useState('React')
// const [name, setName] = useState<String>('React'); //permet de typer le useState 



const [pokemons, setPokemons] = useState<Pokemon[]>([]);
useEffect(() => {
 setPokemons(POKEMONS);
}, []) 



return (
    <div>
      <h1>il y a {pokemons.length} pokemons dans le pokedex ! </h1>
      {/* <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id} > {pokemon.name} </li>
        ) )  }
      </ul> */}



    </div>
  );
};

export default App;