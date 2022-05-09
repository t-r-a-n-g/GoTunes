const getApi = require("../utils/apis");

class ArtistsService {
  static async getArtist(id, src) {
    const api = getApi(src);
    const artist = await api.getArtist(id);
    return artist;
  }

  static async getAlbums(id, src) {
    const api = getApi(src);
    const albums = await api.getArtistAlbums(id);
    return albums;
  }

  static async getTracks(id, src) {
    const api = getApi(src);
    const tracks = await api.getArtistTracks(id);
    return tracks;
  }
}

module.exports = ArtistsService;
