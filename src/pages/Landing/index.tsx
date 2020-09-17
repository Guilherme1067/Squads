import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/index'

import './style.css'

function Landing() {
    return (
        <div>
            <Header />
            <div>
                <div className='buttons'>
                    <Link  to="/albums"><button>Pesuisar por album</button></Link>
                    <Link to="/artist"><button>Pesquisar por artista</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;