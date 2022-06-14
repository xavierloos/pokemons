import React from 'react';

function Pagination({ pokemonPerPage, totalPokemon, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="container">
            <div className="row pt-4 m-auto px-auto">
                <nav className=''>
                    <p className='p-0 m-0'>Go to page: </p>
                    <ul className='pagination m-0 p-0 d-flex flex-row justify-content-center align-items-center flex-wrap'>
                        {pageNumbers.map(number =>
                            <li key={number} className='page-item'>
                                <a onClick={() => paginate(number)} href={number} className='page-link'>
                                    {number}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination;