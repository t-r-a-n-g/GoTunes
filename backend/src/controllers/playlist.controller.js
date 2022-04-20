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
      switch (err.name) {
        case "NotFoundError":
          return res
            .status(404)
            .json({ errors: { playlist: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
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
      switch (err.name) {
        case "NotFoundError":
          return res
            .status(404)
            .json({ errors: { playlist: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }

    return res.json(resData);
  }
}

module.exports = PlaylistController;
