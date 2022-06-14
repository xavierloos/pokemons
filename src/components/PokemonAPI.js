import React, { useState, useEffect } from "react";
import axios from 'axios'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'
import PokemonList from './PokemonList'

// const api = axios.create({
//   baseURL: `https://pokeapi.co/api/v2/pokemon`,
// });

// const local_data = JSON.parse(localStorage.getItem('Pokemons')) ? JSON.parse(localStorage.getItem('Pokemons')) : []

// const pokeball = JSON.parse(localStorage.getItem('Pokeball')) ? JSON.parse(localStorage.getItem('Pokeball')) : []

// export default class PokemonList extends React.Component {
//   state = {
//     pokemons: local_data,
//     pokemonTypes: []
//   }

//   constructor() {
//     super();
//     this.getPokemons();
//   }

//   getPokemons = async () => {
//     try {
//       if (this.state.pokemons.length === 0 && local_data.length === 0) {
//         let data = await api.get('?offset=0&limit=100').then(({ data }) => data)
//         let pokemon_data = [];
//         data['results'].forEach((pokemon, index) => {
//           let pokeballStatus = pokeball.some(item => item.name === pokemon.name)
//           pokemon_data.push(
//             {
//               name: pokemon['name'],
//               id: index + 1,
//               image: `https://cdn.traction.one/pokedex/pokemon/${index + 1}.png`,
//               inPokeball: pokeballStatus
//             });
//         })
//         this.setState({ pokemons: pokemon_data });
//         localStorage.setItem("Pokemons", JSON.stringify(pokemon_data));
//       } else {
//         console.log('Data from local');
//       }
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row d-flex flex-row justify-content-center py-4">
//           {
//             this.state.pokemons.map((pokemon, index) =>
//               <PokemonCard id={pokemon.id} key={index + 1} name={pokemon.name} image={pokemon.image} status={pokemon.inPokeball} />
//             )
//           }
//         </div>
//       </div>
//     )
//   }
// }

// import React from 'react'

function PokemonAPI() {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage] = useState(100)

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?&limit=2000`);
      setPokemon(res.data['results']);
      setLoading(false)
    }
    fetchPokemon();
  }, [])
  // Get currrent pokemon
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    // <div className="container">
    //   <div className="row d-flex flex-row justify-content-center py-4">
    //     {pokemon.map((pokemon, index) =>
    //       <PokemonCard id={pokemon.id} key={index + 1} name={pokemon.name} image={pokemon.image} status={pokemon.inPokeball} />
    //       <PokemonCard id={pokemon.id} key={index + 1} name={pokemon.name} />
    //     )
    //     }
    //   </div>
    // </div>
    <>
      <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={pokemon.length} paginate={paginate} />
      <PokemonList pokemon={currentPokemon} loading={loading} />
      <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={pokemon.length} paginate={paginate} />
    </>
  )
}

export default PokemonAPI;
