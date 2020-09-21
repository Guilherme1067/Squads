import React from 'react';
import { Link } from 'react-router-dom';

import playIcon from '../../assets/icons/play-solid.svg'

import './style.css';



function Header () {
        return (
            <header className="header">
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Great+Vibes&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet"></link>
                <nav className="header-nav">
                    <p>Your Music <img className="playIcon" src={playIcon} alt="Icone de start" /></p>
                    <ul className="header-menu">
                    <li>
                            <Link to="/"><h3 className="search-options" >Home</h3></Link>
                        </li>
                         <li>
                            <Link to="/albums"><h3 className="search-options" >albuns</h3></Link>
                        </li>
                        <li>
                            <Link to="/artist"><h3 className="search-options">artistas</h3></Link>
                        </li> 

                    </ul>
                    {/* <p className="header-nav-description">Your music</p> */}
                </nav>
            </header>
        )
    }


export default Header;