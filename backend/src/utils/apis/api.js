/* eslint-disable class-methods-use-this */
const db = require("../../models");

class InternalAPI {
  async getUserPlaylists(id) {
    const { Playlist, PlaylistUser } = db;

    const userPlaylists = await PlaylistUser.findAll({
      where: {
        userId: id,
        is_creator: true,
      },
      include: Playlist,
    });

    // if(!userPlaylists) throw new NotFoundError();
    // console.log(playlists);
    // const playlists = user.getPlaylists();
    return userPlaylists;
  }
}

const api = new InternalAPI();
Object.freeze(api);

module.exports = api;
