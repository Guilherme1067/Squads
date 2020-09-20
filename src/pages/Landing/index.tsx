import React, { Component } from 'react';


import Header from '../../components/Header/index'
import TopArtistService from '../../services/topArtists'

import './style.css'


class Landing extends Component {

    state = {
        topArtists: [
            {
                name: "",
                image: "",
            }
        ]
    }

    getTopArtistByRegion = async () => {
        const data = await TopArtistService.getTopArtistsByRegion()
        const topArtists = data.albums.album;

        this.setState({ topArtists })
    }

    componentDidMount() {
        this.getTopArtistByRegion();
    }

    render() {

        const { topArtists }: any = this.state;
        const nonePhotoAvaible: string = 'https://www.protec.com.br/img/fonto-indisponivel.png'
        return (
            <div>
                <div>
                    <Header />
                    <div />
                    <div className='artist'>
                        {
                            topArtists.map((element: any, index: number) =>
                                <div key={index} className="artist-div">
                                    <img
                                        className="artist-img"
                                        src={element.image[0] && element.image[0]["#text"] !== "" ? element.image[2]["#text"] : nonePhotoAvaible}
                                        alt={element.name} >
                                    </img>
                                    {element.name}
                                </div>)
                        }
                    </div>
                </div>

            </div>
        )

    }
}
export default Landing;