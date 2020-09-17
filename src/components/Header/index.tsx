import React from 'react';

import playIcon from '../../assets/icons/play-solid.svg'

import './style.css';

function Header() {
    return (
        <header className="header">
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Great+Vibes&display=swap" rel="stylesheet"></link>
            <nav className="header-nav">
                <p>Music <img className="playIcon" src={playIcon} alt="Icone de start" /> Ground</p>
                <p className="header-nav-description">Squad Test</p>
                <p className="header-nav-description">The place to find your music</p>
            </nav>
        </header>
    )
}

export default Header;