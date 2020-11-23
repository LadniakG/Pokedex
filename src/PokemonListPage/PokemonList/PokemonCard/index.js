import React from 'react'
import './style.css'
import pokemonsData from './pokemons.json'

export default function PokemonCard(props)
{

    return(
        <div className="card">
            <p>No {props.id}</p>
            <h1>{props.name}</h1>
            <img src={props.img}></img>
            <p>{props.type}</p>
        </div>
    );
}