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
                <div className="album" >
                    {dataAlbum.map((element: string, index: any) =>
                        <ul className="album-list" key={index}>
                            <li>
                                {element}
                            </li>
                        </ul>)}
                </div>
                <div className="artist">
                    {dataArtist.map((element: string, index: any) =>
                        <ul className="artist-list" key={index}>
                            <li>
                                {element}
                            </li>
                        </ul>)}
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