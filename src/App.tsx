import React, { useState, useEffect } from 'react';


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
      <h1 className='center'> POKEDEX  </h1>
      <div className="container">
        <div className="row">


          {pokemons.map(({ id, name, picture, created }) => (
            <div className='col s6 m4' key={id} > 
            <div className='card horizontal' >
              <div className='card-image' >
                <img src={picture} alt= {name} />
              </div>
<div className='card-stacked' >

  <div className='card-content' >
            <p> {name} </p>
            <p> <small> {created.toString()} </small> </p>

    </div> 

</div>
</div>

            </div>

            
            
            // {name} </div>
            // <div key={name} > {name} </div>





          ))}

        </div>


      </div>
    </div>
  );
};

export default App;