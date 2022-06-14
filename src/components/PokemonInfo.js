import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import Modal from "@restart/ui/Modal";

function PokemonInfo(props) {
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => {
        let info = []
        info.push(res.data['name'])
        info.push(res.data['height'])
        info.push(res.data['weight'])
        let abilities = []
        res.data['abilities'].forEach((type) => {
          abilities.push({
            name: type['ability']['name'],
            is_hidden: type['is_hidden']
          })
        })
        info.push(abilities)
        setInfo(info)
        // setStrength(types)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const check_abilities = () => {
    const names = []
    if (info[3]) {
      info[3].forEach((data, index) => {
        names.push(<li key={data['name'] + data['is_hidden'] + index} className=''>{data['name']} {data['is_hidden'] ? '(Hidden)' : ''}</li>)
      })
      return names
    }

    // if (info[3]) {
    //   info[3] = JSON.stringify(info[3])
    //   info[3].foreach((pokemon) =>
    //     console.log(pokemon)
    //   )
    // }
  }
  return (
    <div key={info[0] + info[1]}>
      <Button onClick={() => setShow(true)} className='btn-pokemon'>
        More Info
      </Button>
      <Modal show={show} aria-labelledby="modal-1-label" onHide={() => setShow(false)}
        renderBackdrop={(props) => (
          <div
            {...props}
            className="fixed inset-0 bg-black-30 z-300"
          />
        )}
        className="z-301 top-1-2 transform translate-y-1-2 translate-x-1-2 modal fade show"
      >
        <div className='p-4 modal-container'>
          <div>
            <h4 id="modal-1-label" className="pokemon-name">{props.name}</h4>
            <hr />
            <p>Height: {info[1]}</p>
            <p>Weight: {info[2]}</p>
            <h5>Abilities</h5>
            <ol> {check_abilities()} </ol>
          </div>
          <div className='d-flex justify-content-end'>
            <Button onClick={() => setShow(false)} className="float-right btn-pokemon" >
              X Close
            </Button>
          </div>

        </div>
      </Modal>
    </div>
  );
}

export default PokemonInfo;