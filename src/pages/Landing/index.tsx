import React from 'react';

import Header from '../../components/Header/index'

import './style.css'

function Landing() {
    return (
        <div>
            <Header />
            <div>
            <div className='buttons'>

            <button>Pesuisar por album</button>

            <button>Pesquisar por artista</button>
            </div>
                
            </div>
        </div>
    )
}

export default Landing;