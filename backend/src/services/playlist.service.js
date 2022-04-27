const getApi = require("../utils/apis");
const { Playlist, User } = require("../models");
const { NotFoundError, AuthorizationError } = require("../exceptions");

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

  static async deletePlaylist(id, user) {
    const playlist = await Playlist.findOne({ where: { id }, include: User });
    if (!playlist) throw new NotFoundError();

    const users = await playlist.getUsers({ where: { id: user.id } });
    if (!users || users.length < 1 || !users[0].playlistUser.is_creator) throw new AuthorizationError();

    await Playlist.destroy({ where: { id } });
    return id;
  }
}

module.exports = PlaylistService;
