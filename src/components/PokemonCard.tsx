import React, { FunctionComponent, useState } from 'react';

import Pokemon from '../models/pokemon';
import './pokemonCard.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import { useNavigate } from 'react-router-dom';


type Props = {
    pokemon: Pokemon,
    borderColor?: string, //syntaxe propre a typescript
    // id: number
}





const PokemonCard: FunctionComponent<Props> = ({ borderColor = 'grey', pokemon }) => {


    const [color, setColor] = useState<string>(); // [pour manipuler la couleur au survol de la souris ]
    const navigate = useNavigate();


    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor("#f5f5f5");
    }

    const goToPokemon = (id: number) => {
        navigate(`/pokemons/${id}`);
    }

    // _______________________________________________________________________




    return (
        <div className='col s6 m4' onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}  >
            <div className='card horizontal' style={{ borderColor: color }} >
                <div className='card-image' >
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className='card-stacked' >

                    <div className='card-content' >
                        <p> {pokemon.name} </p>
                        <p> <small> {formatDate(pokemon.created)} </small> </p>

                        {pokemon.types.map(type => (
                            <span key={type} className={formatType(type)} > {type} </span>

                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PokemonCard;