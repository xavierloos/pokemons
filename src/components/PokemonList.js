import React from 'react'
import PokemonCard from './PokemonCard'

function PokemonList({ pokemon, loading }) {


    if (loading) {
        return <h2>Loading... </h2>
    }
    return (
        <div className="container-fluid">
            <div className="row d-flex flex-row justify-content-center py-4">
                {pokemon.map((pokemon, index) =>
                    // <PokemonCard id={pokemon.id} key={index + 1} name={pokemon.name} image={pokemon.image} status={pokemon.inPokeball} />
                    <PokemonCard id={index + 1} key={index + 1} name={pokemon.name} image={pokemon.image} />
                )
                }
            </div>
        </div>
    )
}
export default PokemonList;