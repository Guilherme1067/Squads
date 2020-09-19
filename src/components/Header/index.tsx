import React, { Component } from 'react';
import { isThisTypeNode } from 'typescript';

import playIcon from '../../assets/icons/play-solid.svg'

import './style.css';



class Header extends Component {

    render() {

        return (
            <header className="header">
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Great+Vibes&display=swap" rel="stylesheet"></link>
                <nav className="header-nav">
                    <p>Music <img className="playIcon" src={playIcon} alt="Icone de start" /> Ground</p>
                    <ul className="header-menu">
                        {/* <li>
                            <input 
                             type="text" 
                             placeholder="Pesquisar" 
                             className="searchInput" 
                             name="search"
                             value={search}
                             onChange={this.getInputValue} /> 
                             
                        <button className="header-submit" type="submit">Pesquisar</button>
                        </li> */}
                    </ul>
                    <p className="header-nav-description">The place to find your music</p>
                </nav>
            </header>
        )
    }
}

export default Header;