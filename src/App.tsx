import React, { FunctionComponent } from 'react';

import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';



const App: FunctionComponent = () => {

  // const [name, setName] = useState('React')
  // const [name, setName] = useState<String>('React'); //permet de typer le useState 


  return (
    // <PokemonList />
    <Router>
      <div>
        {/* la barre de navigation commun a toutes les pages  */}

        <nav>
          <div className='nav-wrapper teal' >
            <Link to="/" className='brand-logo center' > POKEDEX  </Link>
          </div>
        </nav>


        {/* systeme de gestion des routes de notre application  */}
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/pokemons/:id" element={<PokemonsDetail />} />

          {/* a mettre en dernier */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </div>


    </Router>



  );
};

export default App;