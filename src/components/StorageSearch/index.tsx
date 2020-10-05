import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"

function StorageReseach() {
    if(localStorage.length > 0 && (localStorage.AlbumSearched || localStorage.ArtistSearched))  {
        return (
            <div>
                <Link to="/history"><button className="search-history">Consultar Histórico</button></Link>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}
export default StorageReseach;