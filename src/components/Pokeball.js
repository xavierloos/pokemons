import React from 'react'
import PokemonCard from './PokemonCard'

const pokeball = JSON.parse(localStorage.getItem('Pokeball')) ? JSON.parse(localStorage.getItem('Pokeball')) : []

pokeball.sort((a, b) => { return a - b })

const check = pokeball.length === 0 ? 'No pokemons in pokeball' : '';

function Pokeball() {

   const checkPokeball = () => {
      if (pokeball.length === 0) {
         return check
      }
   }

   return (
      <div className="container-fluid">
         <div className="row d-flex flex-row justify-content-center py-4">
            <h1>{checkPokeball()}</h1>
            {pokeball.map((pokemon) =>
               <PokemonCard id={parseInt(pokemon)} key={parseInt(pokemon)} />
            )}
         </div>
      </div>
   )
}

export default Pokeball;