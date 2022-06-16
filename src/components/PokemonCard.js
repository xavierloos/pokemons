import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PokemonInfo from './PokemonInfo'
import PokemonStrength from './PokemonStrength';
import axios from 'axios'

const pokeball = JSON.parse(localStorage.getItem('Pokeball')) ? JSON.parse(localStorage.getItem('Pokeball')) : []

function PokemonCard(props) {
    const [name, setName] = useState('')

    const fetchPokemonName = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
        setName(res.data['name']);
    }

    const addToPokeball = (pokemon) => {
        pokeball.push(pokemon);
        localStorage.setItem("Pokeball", JSON.stringify(pokeball));
        window.location.reload(true)
    }

    const removeFromPokeball = (pokemon) => {
        pokeball.splice(pokeball.indexOf(pokemon), 1)
        localStorage.setItem('Pokeball', JSON.stringify(pokeball));
        window.location.reload(true)
    }

    const checkPokeball = (pokemon) => {
        if (pokeball == null || pokeball.filter((val) => val.includes(pokemon)) != '') {
            alert("Already Caught")
        } else {
            addToPokeball(pokemon)
        }
    }

    const checkStatus = (pokemon) => {
        if (pokeball.filter((val) => val.includes(pokemon)) != '') {
            return 'pokeball-icon'
        } else {
            return 'd-none'
        }
    }

    const pokemon_number = props.id <= 9 ? '00' + props.id : props.id <= 99 ? '0' + props.id : props.id;

    useEffect(() => {
        fetchPokemonName();
    }, [])

    return (
        <div id={props.id} key={props.id} className="flip-card m-2 col-12 col-sm-5 col-md-3 col-lg-3">
            <div className="flip-card-inner">
                <div className="flip-card-front d-flex flex-column justify-content-between">
                    <div className='m-2'>
                        <LazyLoadImage effect="blur" className='pokemon-img' id={props.id + '-image'} alt={props.id + '-' + name + '-image'} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon_number}.png`} />
                        <img alt={props.id + '-status-image'} src='./images/icons8-pokeball-96.png' className={checkStatus(pokemon_number)} />
                        <h3 className='pokemon-id ml-1'>#{pokemon_number}</h3>
                    </div>
                    <div className='m-2'>
                        <PokemonStrength id={props.id} />
                    </div>
                </div>
                <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                    <h1 className='pokemon-name'>{name}</h1>
                    <Button className={pokeball.filter((val) => val.includes(pokemon_number)) != '' ? 'btn-pokemon catch' : 'btn-pokemon'} onClick={() => checkPokeball(pokemon_number)}>
                        <img alt={props.id + '-pokeball-image'} src='./images/icons8-pokeball-96.png' className="pokeball-button" /> Catch
                    </Button>
                    <Button className={pokeball.filter((val) => val.includes(pokemon_number)) != '' ? 'btn-pokemon' : 'btn-pokemon remove'} onClick={() => removeFromPokeball(pokemon_number)}>
                        Remove
                    </Button>
                    <PokemonInfo id={props.id} name={name} />
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;