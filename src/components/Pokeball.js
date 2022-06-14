import React from 'react'
import PokemonCard from './PokemonCard'

const pokeball = JSON.parse(localStorage.getItem('Pokeball')) ? JSON.parse(localStorage.getItem('Pokeball')) : []

pokeball.sort((a, b) => { return a.id - b.id });

const check = pokeball.length === 0 ? 'No pokemons in pokeball' : '';

function Pokeball() {

   const checkPokeball = () => {
      if (pokeball.length === 0) {
         return check
      }
   }

   return (
      <div className="container">
         <div className="row d-flex flex-row justify-content-center py-4">
            <h1>{checkPokeball()}</h1>
            {pokeball.map((pokemon, index) =>
               <PokemonCard id={pokemon.id} key={index + 1} name={pokemon.name} image={pokemon.image} status='true' />
            )}
         </div>
      </div>
   )
}

export default Pokeball;