const getApi = require("../utils/apis");
const { Playlist } = require("../models");

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

  static async createPlaylist(title, user) {
    const playlist = await Playlist.create({
      title,
      description: "",
      cover: "",
      duration: 0,
    });

    playlist.addUser(user, {
      through: {
        can_edit: true,
        is_creator: true,
      },
    });

    return playlist;
  }
}

module.exports = PlaylistService;
