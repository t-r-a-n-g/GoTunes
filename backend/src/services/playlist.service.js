const getApi = require("../utils/apis");
const db = require("../models");
const { NotFoundError, AuthorizationError } = require("../exceptions");
const TrackService = require("./track.service");

class PlaylistService {
  static async getPlaylist(playlistId, src, currentUser) {
    const api = getApi(src);
    const playlist = await api.getPlaylist(playlistId, currentUser);
    return playlist;
  }

  static async getPlaylistTracks(playlistId, src) {
    const api = getApi(src);
    const tracks = await api.getPlaylistTracks(playlistId);

    if (src === "internal") {
      const externalTracks = await Promise.all(
        tracks.external.map((track) => {
          return TrackService.getTrack(track.external_id, track.source);
        })
      );

      return [...tracks.internal, ...externalTracks];
    }

    return tracks;
  }

  static async getFavoritesPlaylist(user) {
    const { PlaylistUser, Playlist } = db;
    const playlist = await PlaylistUser.findOne({
      where: { userId: user.id, is_favorite: true },
      include: Playlist,
    });

    return {
      can_edit: true,
      is_creator: true,
      is_favorite: true,
      playlist: playlist.playlist,
      user,
    };
  }

  static async createPlaylist(title, currentUser, isFavorite = false) {
    const { Playlist } = db;

    const playlist = await Playlist.create({
      title,
      description: "",
      cover: "",
      duration: 0,
    });

    playlist.addUser(currentUser, {
      through: {
        can_edit: true,
        is_creator: true,
        is_favorite: isFavorite,
      },
    });

    return {
      can_edit: true,
      is_creator: true,
      is_favorite: isFavorite,
      playlist,
      user: {
        id: currentUser.id,
        username: currentUser.username,
        userProfile: currentUser.userProfile?.get({ plain: true }), // convert model to plain object
      },
    };
  }

  static async deletePlaylist(id, currentUser) {
    const { Playlist, User } = db;
    const playlist = await Playlist.findOne({ where: { id }, include: User });
    if (!playlist) throw new NotFoundError();

    const users = await playlist.getUsers({ where: { id: currentUser.id } });
    if (!users || users.length < 1 || !users[0].playlistUser.is_creator)
      throw new AuthorizationError();

    await Playlist.destroy({ where: { id } });
    return id;
  }

  static async addTrack(playlistId, track, currentUser) {
    const { Track, ExternalTrack } = db;
    const api = getApi("internal");

    const playlist = await api.getPlaylist(playlistId, currentUser, true);
    if (!playlist.can_edit) throw new AuthorizationError();

    let addedTrack = null;
    if (track.source !== "internal") {
      let dbTrack = await ExternalTrack.findOne({
        where: { source: track.source, external_id: track.id },
      });
      if (!dbTrack) {
        dbTrack = await ExternalTrack.create({
          external_id: track.id,
          source: track.source,
        });
      }

      addedTrack = playlist.playlist.addExternalTrack(dbTrack);
    } else {
      const dbTrack = await Track.findOne({ where: { id: track.id } });
      if (!dbTrack) throw new NotFoundError();

      addedTrack = playlist.playlist.addTrack(dbTrack);
    }

    return addedTrack;
  }
}

module.exports = PlaylistService;
