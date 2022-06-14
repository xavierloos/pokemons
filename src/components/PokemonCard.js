import React from 'react';
import { Button } from 'reactstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PokemonInfo from './PokemonInfo'
import PokemonStrength from './PokemonStrength';

const pokeball = JSON.parse(localStorage.getItem('Pokeball')) ? JSON.parse(localStorage.getItem('Pokeball')) : []

function PokemonCard(props) {
    const addToPokeball = (pokemon) => {
        pokeball.push(pokemon);
        localStorage.setItem("Pokeball", JSON.stringify(pokeball));
        window.location.reload(true)
    }

    const removeFromPokeball = (pokemon) => {
        let pokemonIndex = pokeball.findIndex(item => item.name === pokemon.name);
        pokeball.splice(pokemonIndex, 1);
        localStorage.setItem('Pokeball', JSON.stringify(pokeball));
        window.location.reload(true)
    }

    const checkPokeball = (pokemon) => {
        if (pokeball == null || pokeball.some(item => item.name === pokemon.name)) {
            alert("Already Caught")
        } else {
            addToPokeball(pokemon)
        }
    }

    const checkStatus = (name) => {
        if (pokeball.some(item => item.name === name)) {
            return 'pokeball-icon'
        } else {
            return 'd-none'
        }
    }

    const pokemonId = props.id <= 9 ? '00' + props.id : props.id <= 99 ? '0' + props.id : props.id;

    return (
        <div id={props.id} key={props.id} className="flip-card m-2 col-12 col-md-4 col-lg-3">
            <div className="flip-card-inner">
                <div className="flip-card-front d-flex flex-column justify-content-between">
                    <div className='m-2'>
                        <LazyLoadImage className='pokemon-img' id={props.id + '-image'} alt={props.id + '-' + props.name + '-image'} src={props.image} placeholderSrc={process.env.PUBLIC_URL + 'images/pokeball-spinner'} />
                        <img alt={props.id + '-status-image'} src='./images/icons8-pokeball-96.png' className={checkStatus(props.name)} />
                        <h3 className='pokemon-id ml-1'>#{pokemonId}</h3>
                    </div>
                    <div className='m-2'>
                        <PokemonStrength id={props.id} />
                    </div>
                </div>
                <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                    <h1 className='pokemon-name'>{props.name}</h1>
                    <Button className={pokeball.some(item => item.name === props.name) ? 'btn-pokemon catch' : 'btn-pokemon'} onClick={() => checkPokeball(props)}>
                        <img alt={props.id + '-pokeball-image'} src='./images/icons8-pokeball-96.png' className="pokeball-button" /> Catch
                    </Button>
                    <Button className={pokeball.some(item => item.name === props.name) ? 'btn-pokemon' : 'btn-pokemon remove'} onClick={() => removeFromPokeball(props)}>
                        Remove
                    </Button>
                    <PokemonInfo id={props.id} name={props.name} />
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;