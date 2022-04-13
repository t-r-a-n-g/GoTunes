const Controller = require("./controller");
const { playlistService } = require("../services");

class PlaylistController {
  static async getPlaylist(req, res) {
    const { playlistId, src } = Controller.getParams(req);
    let resData = {};

    try {
      const playlist = await playlistService.getPlaylist(playlistId, src);
      resData = playlist;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }

  static async getPlaylistTracks(req, res) {
    const { playlistId, src } = Controller.getParams(req);
    let resData = {};

    try {
      const tracks = await playlistService.getPlaylistTracks(playlistId, src);
      resData = tracks;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }
}

module.exports = PlaylistController;
