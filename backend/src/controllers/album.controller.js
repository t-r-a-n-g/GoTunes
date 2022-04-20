const Controller = require("./controller");
const { AlbumService } = require("../services");

class AlbumController {
  static async getAlbum(req, res) {
    const { src, albumId } = Controller.getParams(req);
    let resData = {};

    try {
      const album = await AlbumService.getAlbum(albumId, src);
      resData = album;
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res.status(404).json({ errors: { album: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }

    return res.json(resData);
  }

  static async getTracks(req, res) {
    const { src, albumId } = Controller.getParams(req);
    let resData = {};

    try {
      const tracks = await AlbumService.getTracks(albumId, src);
      resData = tracks;
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res.status(404).json({ errors: { album: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }

    return res.json(resData);
  }
}

module.exports = AlbumController;
