import React, { useState, useEffect } from "react";
import axios from 'axios'
import PokemonCard from './PokemonCard'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Pokemon() {
  // Check if the data has been cached!
  const local_data = JSON.parse(localStorage.getItem('Pokemons')) ? JSON.parse(localStorage.getItem('Pokemons')) : []

  const [pokemon, setPokemon] = useState([])

  let offset = 0
  let limit = 18
  const fetchPokemon = async () => {
    if (local_data.length == 0) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      setPokemon((pokemon) => [...pokemon, ...res.data['results']]);
      offset += 10
    }
  }
  const handleScroll = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      fetchPokemon();
    }
  }
  useEffect(() => {
    fetchPokemon();
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row justify-content-center py-4">
        {pokemon.map((pokemon, index) =>
          <LazyLoadComponent effect="blur">
            <PokemonCard id={index + 1} key={index + 1} name={pokemon.name} image={pokemon.image} />
          </LazyLoadComponent>

        )
        }
      </div>
    </div >
  )
}

export default Pokemon;
