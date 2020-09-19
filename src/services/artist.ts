import api from './api';

export default {
    getArtistByName: async (artistName: string) => {
        const response = await api.get(`?method=artist.search&artist=${artistName}&api_key=de4c910b37c6d7dad7b6d6b551a1ded5&format=json`)
        return response.data;
    }
}
