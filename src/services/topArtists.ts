import api from './api';

export default {
    getTopArtistsByRegion: async () => {
        const response = await api.get("?method=tag.gettopalbums&tag=trap&api_key=de4c910b37c6d7dad7b6d6b551a1ded5&format=json&format=json")
        return response.data;
    }
}

