import api from './api';


export default {
    getAlbumByName: async (albumName:string) =>{ 
        const response = await api.get(`?method=album.search&album=${albumName}&api_key=de4c910b37c6d7dad7b6d6b551a1ded5&format=json`);
        return response.data;
    }
}