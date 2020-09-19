import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import playIcon from '../../assets/icons/play-solid.svg'

import './style.css';



class Header extends Component {

    render() {

        return (
            <header className="header">
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Great+Vibes&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet"></link>
                <nav className="header-nav">
                    <p>Music <img className="playIcon" src={playIcon} alt="Icone de start" /> Ground</p>
                    <ul className="header-menu">
                         <li>
                            <Link to="/albums"><h3 className="search-options" >Pesquisar por album</h3></Link>
                        </li>
                        <li>
                            <Link to="/artist"><h3 className="search-options">Pesquisar por artista</h3></Link>
                        </li> 

                    </ul>
                    <p className="header-nav-description">The place to find your music</p>
                </nav>
            </header>
        )
    }
}

export default Header;