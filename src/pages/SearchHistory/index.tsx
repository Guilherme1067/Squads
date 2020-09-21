import React from 'react';
import Header from '../../components/Header';

import './style.css'

function ShowHistory() {

    let data = localStorage;
    let dataAlbum = data.AlbumSearched ? data.AlbumSearched.replace(/[\[\].!'@><|://\\;&*()_+= "]/g, " ").trim().split(",") : [];
    let dataArtist = data.ArtistSearched ? data.ArtistSearched.replace(/[\[\].!'@><|://\\;&*()_+= "]/g, " ").trim().split(",") : [];

    if (data) {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <div className="all-search">
                <div className="album-search" >
                    <h3>Albums</h3>
                    {dataAlbum.map((element: string, index: any) =>
                        <li className="album-list" key={index}>
                            {element}
                        </li>)}
                </div>
                <div className="artist-search">
                    <h3>Artistas</h3>
                    {dataArtist.map((element: string, index: any) =>
                        <li className="artist-list" key={index}>
                                {element}
                        </li>)}
                </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default ShowHistory;