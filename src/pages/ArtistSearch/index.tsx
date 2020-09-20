import React, { Component } from 'react';
import artistService from '../../services/artist';

import Header from '../../components/Header'

import './style.css';


class Artist extends Component {

    state = {
        artist: [
            {
                name: "",
                artist: "",
                url: "",
                image: "",
            },
        ],
        search:"",
    }


    /* Making a async request to lastFm Api and setting the state based on the artist research*/
    getArtist = async (artistName: string) => {
        const data = await artistService.getArtistByName(artistName)
        const artist = data.results.artistmatches.artist;

        this.setState({ artist })
    }

    getInputValue = (event: any) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
        // localStorage.setItem('Nome', value)

    }

    // componentDidMount() {
    //     this.getArtist('LIL UZI');

    // }

    render() {
        const { artist,search }: any = this.state
        let nonePhotoAvaible: string = 'https://www.protec.com.br/img/fonto-indisponivel.png'

        return (
            <div>
                <header>
                    <Header />
                </header>
                
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="search-input"
                    name="search"
                    value={search}
                    onChange={this.getInputValue} />

                <button className="search-button" onClick={() => this.getArtist(search)} type="button">Buscar</button>
            </div>

                <section className="artist">
                    {
                        artist.map((element: any, index: number) => 
                        <div key={index} className="artist-div">
                            <img 
                             className="artist-img" 
                             src={element.image && element.image[2]["#text"] !== "" ? element.image[2]["#text"] : nonePhotoAvaible} 
                             alt={element.name} ></img>{element.name}
                        </div>)
                    }
                </section>
            </div>
        )
    }
}
export default Artist;