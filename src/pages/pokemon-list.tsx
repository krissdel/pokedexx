import React, { FunctionComponent, useEffect, useState } from 'react';

import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/PokemonCard';

const PokemonList: FunctionComponent = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);



    return (
        <>
            {/* <h1 className='center' > POKEDEX </h1> */}
            <div className='container' >
                <div className='row' >
                    {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}

                </div>

            </div>


        </>
    );
};

export default PokemonList;