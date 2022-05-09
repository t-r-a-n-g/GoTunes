const { SearchService } = require("../services");
const Controller = require("./controller");

class SearchController {
  static async all(req, res) {
    const { q, limit, offset, src } = Controller.getParams(req);
    let resData = {};

    try {
      resData = await SearchService.searchAll(q, limit, offset, src);
    } catch (err) {
      switch (err) {
        default:
          console.error(err);
          res.status(500);
          resData = {
            errors: {
              server: "err-internal",
            },
          };
      }
    }

    return res.json(resData);
  }

  static async artists(req, res) {
    const { q, limit, offset, src } = Controller.getParams(req);

    try {
      const artists = await SearchService.searchArtists(q, limit, offset, src);
      res.json(artists);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errors: { server: "err-internal" } });
    }
  }

  static async albums(req, res) {
    const { q, limit, offset, src } = Controller.getParams(req);

    try {
      const albums = await SearchService.searchAlbums(q, limit, offset, src);
      res.json(albums);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errors: { server: "err-internal" } });
    }
  }

  static async playlists(req, res) {
    const { q, limit, offset, src } = Controller.getParams(req);

    try {
      const playlists = await SearchService.searchPlaylists(
        q,
        limit,
        offset,
        src
      );
      res.json(playlists);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errors: { server: "err-internal" } });
    }
  }

  static async tracks(req, res) {
    const { q, limit, offset, src } = Controller.getParams(req);

    try {
      const tracks = await SearchService.searchTracks(q, limit, offset, src);
      res.json(tracks);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errors: { server: "err-internal" } });
    }
  }

  static async users(req, res) {
    const { q, limit, offset, src } = Controller.getParams(req);

    try {
      const user = await SearchService.searchUsers(q, limit, offset, src);
      return res.json(user);
    } catch (err) {
      switch (err.name) {
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }
  }
}

module.exports = SearchController;
