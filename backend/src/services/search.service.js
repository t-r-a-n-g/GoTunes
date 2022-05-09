const getApi = require("../utils/apis");

class SearchService {
  static async searchAll(q, limit, offset, src) {
    const api = getApi(src);
    const results = api.searchAll(q, { limit, offset });

    return results;
  }

  static async searchArtists(q, limit, offset, src) {
    const api = getApi(src);

    const artists = await api.searchArtists(q, { limit, offset });
    return artists;
  }

  static async searchAlbums(q, limit, offset, src) {
    const api = getApi(src);

    const albums = await api.searchAlbums(q, { limit, offset });
    return albums;
  }

  static async searchPlaylists(q, limit, offset, src) {
    const api = getApi(src);

    const playlists = await api.searchPlaylists(q, { limit, offset });
    return playlists;
  }

  static async searchTracks(q, limit, offset, src) {
    const api = getApi(src);

    const tracks = await api.searchTracks(q, { limit, offset });
    return tracks;
  }

  static async searchUsers(q, limit, offset, src) {
    const api = getApi(src);

    const users = await api.searchUsers(q, { limit, offset });
    return users;
  }
}

module.exports = SearchService;
