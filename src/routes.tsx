import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Albums from './pages/AlbumSearch';
import Artist from './pages/ArtistSearch';
import Landing from './pages/Landing'
import ShowHistory from './pages/SearchHistory';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Landing} />
            <Route path='/albums' component={Albums} />
            <Route path='/artist' component={Artist} />
            <Route path='/history' component={ShowHistory} />
        </BrowserRouter>
    )
}

export default Routes;