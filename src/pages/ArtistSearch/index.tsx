import React, { Component } from "react";
import artistService from "../../services/artist";

import Header from "../../components/Header";

import "./style.css";
import StorageReseach from "../../components/StorageSearch";
import SearchInput from "../../components/SearchInput";

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
    search: "",
    isThereArtist: false,
  };

  /* Making a async request to lastFm Api and setting the state based on the artist research*/
  getArtist = async (artistName: string) => {
    if (artistName) {
      const data = await artistService.getArtistByName(artistName);
      const artist = data.results.artistmatches.artist;

      this.saveSearchToStorage(artistName);
      this.setState({ artist, isThereArtist: true });
    } else {
      return;
    }
  };

  getInputValue = (event: any) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  saveSearchToStorage = (artistSearched: any) => {
    let storageData = JSON.parse(
      localStorage.getItem("ArtistSearched") || "[]"
    );
    storageData.push(artistSearched);
    localStorage.setItem("ArtistSearched", JSON.stringify(storageData));
  };

  render() {
    const { artist, search, isThereArtist }: any = this.state;
    let nonePhotoAvaible: string =
      "https://www.protec.com.br/img/fonto-indisponivel.png";

    return (
      <div>
        <header>
          <Header />
        </header>

        <div className="search-form">
          <SearchInput
            getInputValue={this.getInputValue}
            doSearch={this.getArtist}
            search={search}
            holder="Digite o nome do artista"
          />
          <StorageReseach />
        </div>

        <section className="artist">
          {isThereArtist ? artist.map((element: any, index: number) => (
                <div key={index} className="artist-div">
                  <img
                    className="artist-img"
                    src={
                      element.image && element.image[2]["#text"] !== ""
                        ? element.image[2]["#text"]
                        : nonePhotoAvaible
                    }
                    alt={element.name}
                  ></img>
                  {element.name}
                </div>
              ))
            : ""}
        </section>
      </div>
    );
  }
}
export default Artist;
