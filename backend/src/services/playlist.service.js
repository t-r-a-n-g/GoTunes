const getApi = require("../utils/apis");

class PlaylistService {
  static async getPlaylist(playlistId, src) {
    const api = getApi(src);
    const playlist = api.getPlaylist(playlistId);
    return playlist;
  }

  static async getPlaylistTracks(playlistId, src) {
    const api = getApi(src);
    const tracks = api.getPlaylistTracks(playlistId);
    return tracks;
  }
}

module.exports = PlaylistService;
