const Controller = require("./controller");
const { albumService } = require("../services");

class AlbumController {
  static async getAlbum(req, res) {
    const { src, albumId } = Controller.getParams(req);
    let resData = {};

    try {
      const album = await albumService.getAlbum(albumId, src);
      resData = album;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }

  static async getTracks(req, res) {
    const { src, albumId } = Controller.getParams(req);
    let resData = {};

    try {
      const tracks = await albumService.getTracks(albumId, src);
      resData = tracks;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }
}

module.exports = AlbumController;
