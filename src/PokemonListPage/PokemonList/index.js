import React from 'react'
import PokemonCard from './PokemonCard'
import './style.css'
import pokemonsData from './pokemons.json'

export default function PokemonList()
{

    return(
        <div className="list">
            {pokemonsData.map((item, id) => {
                return(
                    <div key={id}>
                        <PokemonCard id={item.id} name={item.names.fr} img={item.image} type={item.types.filter(t => t.includes(''))} type={item.types.map(function (typ, i){return(<span key={i}>{typ} </span>)})}/>
                    </div>
                );
            })}
        </div>
    );
}