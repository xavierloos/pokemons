import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonStrength(props) {
    const [strength, setStrength] = useState([]);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
            .then((res) => {
                let types = []
                res.data['types'].forEach((type) => {
                    types.push(type['type']['name']);
                })
                setStrength(types)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div className='d-flex flex-row'>
            {
                strength.map((type) =>
                    <div key={props.id + type} className={'strengthIcon ' + type}>{type}</div>
                )
            }
        </div>
    );
}

export default PokemonStrength;