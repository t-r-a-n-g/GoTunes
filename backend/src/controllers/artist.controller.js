const { ArtistService } = require("../services");
const Controller = require("./controller");

class ArtistController {
  static async getArtist(req, res) {
    const { src, artistId } = Controller.getParams(req);
    let resData = {};

    try {
      const artist = await ArtistService.getArtist(artistId, src);
      resData = artist;
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res.status(404).json({ errors: { artist: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }

    return res.json(resData);
  }

  static async getAlbums(req, res) {
    const { src, artistId } = Controller.getParams(req);
    let resData = {};

    try {
      const albums = await ArtistService.getAlbums(artistId, src);
      resData = albums;
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res.status(404).json({ errors: { artist: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }

    return res.json(resData);
  }

  static async getTracks(req, res) {
    const { src, artistId } = Controller.getParams(req);
    let resData = {};

    try {
      const tracks = await ArtistService.getTracks(artistId, src);
      resData = tracks;
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res.status(404).json({ errors: { artist: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }

    return res.json(resData);
  }
}

module.exports = ArtistController;
