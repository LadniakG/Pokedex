import React from 'react'
import PokemonCard from './PokemonCard'
import './style.css'
import pokemonsData from './pokemons.json'

export default function PokemonList(props)
{
    const colors = {poison : "#a33ea1", fire : "#ee8130", grass : "#7ac74c", bug: "#a6b91a", flying : "#a98ff3", dragon : "#6f35fc", water : "#6390f0", ice : "#96d9d6", normal : "#a8a77a", ground : "#e2bf65", rock : "#b6a136", electric : "#f7d02c", fairy : "#d685ad", fighting : "#c22e28", psychic : "#f95587", steel : "#b7b7ce", ghost : "#735797"}



    const pokemonsToShow = pokemonsData.filter((pokemon) => {
        if(pokemon.names[props.language].toLowerCase().includes(props.searchText.toLowerCase()))
        {
            return true
        }
        return false
    })

    return(
        <div className="list">
            {pokemonsToShow.map((item, id) => {
                return(
                    <div key={item.id}>
                        <PokemonCard id={item.id} name={item.names[props.language]} img={item.image}  type={item.types.map(function (typ, i){return(<span key={i} style={{backgroundColor : colors[typ]}}> {typ}</span>)})}/>
                    </div>
                );
            })}
        </div>
    );
}