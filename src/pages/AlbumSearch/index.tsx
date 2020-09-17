import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../components/Header'

class Albums extends Component {

    state = {
        album: [
            {
                name: "",
                artist: "",
                url: "",
                img: ""
            },
        ],
    }
    getAlbum = async (albumName: string) => {
        const data = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName}&api_key=de4c910b37c6d7dad7b6d6b551a1ded5&format=json`);
        const album = data.data.results.albummatches.album;
        
        this.setState({ album })
    }
    render() {
        this.getAlbum('ANTI');
        const { album } = this.state;
        console.log(album)
        return (
            <div>
                <header>
                    <Header />
                </header>

                <section className="albums">
                    {
                        album.map(element => <div>{element.name}</div>)
                    }
                </section>
            </div>
        )
    }
}
export default Albums;