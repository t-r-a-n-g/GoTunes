/* eslint-disable class-methods-use-this */
const { Op } = require("sequelize");

const db = require("../../models");
const { NotFoundError } = require("../../exceptions");

class InternalAPI {
  constructor() {
    this.userAttributes = ["id", "username", "kind", "source"];
  }

  async searchUsers(q, options) {
    const { User, UserProfile } = db;
    const opts = {
      limit: options.limit || 20,
      offset: options.offset || 0,
    };

    const users = await User.findAll({
      where: { username: { [Op.like]: `%${q}%` } },
      ...opts,
      include: UserProfile,
      attributes: this.userAttributes,
      raw: true,
      nest: true,
    });
    return users;
  }

  async getUser(id) {
    const { User, UserProfile } = db;

    const user = User.findOne({
      where: { id },
      include: UserProfile,
      attributes: this.userAttributes,
      raw: true,
      nest: true,
    });
    if (!user) throw new NotFoundError();

    return user;
  }

  async getPlaylist(id, currentUser, asModel = false) {
    const { User, UserProfile, Playlist, PlaylistUser } = db;

    // ToDo: combine to single sql query

    const playlist = await Playlist.findOne({ where: { id } });
    if (!playlist) throw new NotFoundError();

    const user = await PlaylistUser.findOne({
      where: {
        playlistId: id,
        is_creator: true,
      },

      include: {
        model: User,
        attributes: this.userAttributes,
        include: UserProfile,
      },
    });

    let canEdit = false;
    let isCreator = false;

    if (user.userId === currentUser.id) {
      canEdit = true;
      isCreator = true;
    } else {
      const plUser = await PlaylistUser.findOne({
        where: {
          playlistId: id,
          userId: currentUser.id,
          can_edit: true,
        },
      });

      if (plUser) {
        canEdit = true;
      }
    }

    return {
      can_edit: canEdit,
      is_creator: isCreator,
      user: asModel ? user.user : user.user.get({ plain: true }),
      playlist: asModel ? playlist : playlist.get({ plain: true }),
    };
  }

  async getUserPlaylists(id) {
    // ToDo: return only playlists created by current user if request comes from another user,
    //       otherwise return all playlists (with is_creator: false)
    const { User, UserProfile, Playlist, PlaylistUser } = db;

    const userPlaylists = await PlaylistUser.findAll({
      where: {
        userId: id,
        is_creator: true,
      },
      include: [
        {
          model: User,
          attributes: this.userAttributes,
          include: UserProfile,
        },
        Playlist,
      ],
      raw: true,
      nest: true,
    });

    // if(!userPlaylists) throw new NotFoundError();
    // console.log(userPlaylists);
    // const playlists = user.getPlaylists();
    return userPlaylists;
  }

  async getPlaylistTracks(playlistId) {
    const { Playlist, Artist } = db;

    // ToDo: Add genres
    const playlist = await Playlist.findOne({ where: { id: playlistId } });

    if (!playlist) throw new NotFoundError();

    return {
      internal: await playlist.getTracks({ include: [Artist] }),
      external: await playlist.getExternalTracks(),
    };
  }
}

const api = new InternalAPI();
Object.freeze(api);

module.exports = api;
