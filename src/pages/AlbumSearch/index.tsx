import React, { Component } from 'react';
import albumService from '../../services/album';

import Header from '../../components/Header'

import './style.css';
import album from '../../services/album';

class Albums extends Component {

    state = {
        album: [
            {
                name: "",
                artist: "",
                url: "",
                image: "",
            },
        ],
    }

    /* Making a async request to lastFm Api and setting the state based on the album research*/
    getAlbum = async (albumName: string) => {
        const data = await albumService.getAlbumByName(albumName)
        const album = data.results.albummatches.album;
       
        this.setState({ album })
    }

    componentDidMount() {
        this.getAlbum('TRENCH');
    }

    render() {
        const {album}: any = this.state
        
        return (
            <div>
                <header>
                    <Header />
                </header>

                <section className="albums">
                    {
                        album.map((element:any,index:number) => <div key={index} className="albums-div"><img className="album-img" src={element.image[0] ? element.image[2]["#text"] : ""}alt={element.name} ></img>{element.name}</div>)
                    }
                </section>
            </div>
        )
    }
}
export default Albums;