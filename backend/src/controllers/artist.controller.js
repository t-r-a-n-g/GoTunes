const { artistService } = require("../services");
const Controller = require("./controller");

class ArtistController {
  static async getArtist(req, res) {
    const { src, artistId } = Controller.getParams(req);
    let resData = {};

    try {
      const artist = await artistService.getArtist(artistId, src);
      resData = artist;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    res.json(resData);
  }

  static async getAlbums(req, res) {
    const { src, artistId } = Controller.getParams(req);
    let resData = {};

    try {
      const albums = await artistService.getAlbums(artistId, src);
      resData = albums;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }

  static async getPlaylists(req, res) {
    const { src, artistId } = Controller.getParams(req);
    let resData = {};

    try {
      const playlists = await artistService.getPlaylists(artistId, src);
      resData = playlists;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }

  static async getTracks(req, res) {
    const { src, artistId } = Controller.getParams(req);
    let resData = {};

    try {
      const tracks = await artistService.getTracks(artistId, src);
      resData = tracks;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }
}

module.exports = ArtistController;
