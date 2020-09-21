import React, { Component } from 'react';
import albumService from '../../services/album';

import Header from '../../components/Header'
import StorageReseach from '../../components/StorageSearch';

import './style.css';

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
        search: "",
        isThereAlbum:false
    }

    /* Making a async request to lastFm Api and setting the state based on the album research*/
    getAlbum = async (albumName: string) => {
        if(albumName){
            const data = await albumService.getAlbumByName(albumName)
            const album = data.results.albummatches.album;
        
            this.saveSearchToStorage(albumName);

            this.setState({ album, isThereAlbum:true })
        }
        else {
            return;
        }
    }

    getInputValue = (event: any) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value

        })
    }

    saveSearchToStorage = (albumSearched: any) => {
        let storageData = JSON.parse(localStorage.getItem('AlbumSearched') || '[]');
        storageData.push(albumSearched);
        localStorage.setItem('AlbumSearched', JSON.stringify(storageData));
    }

    render() {
        const { album, search, isThereAlbum}: any = this.state
        const nonePhotoAvaible: string = 'https://www.protec.com.br/img/fonto-indisponivel.png'
        return (
            <div>
                <header>
                    <Header />
                </header>

                <div className="search-form">
                    <input
                        type="text"
                        placeholder="Digite o nome do álbum"
                        className="search-input"
                        name="search"
                        value={search}
                        onChange={this.getInputValue}
                    />
                    <button className="search-button" onClick={() => this.getAlbum(search)} type="button">Buscar</button>
                    <StorageReseach/>
                </div>

                <section className="albums">
                    {
                        isThereAlbum ? album.map((element: any, index: number) =>
                            <div key={index} className="albums-div">
                                <img
                                    className="album-img"
                                    src={element.image[0] && element.image[0]["#text"] !== "" ? element.image[2]["#text"] : nonePhotoAvaible}
                                    alt={element.name} ></img>{element.name}
                            </div>) : ""
                    }
                </section>
            </div>
        )
    }
}
export default Albums;