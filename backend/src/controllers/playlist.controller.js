const Controller = require("./controller");
const { PlaylistService } = require("../services");

class PlaylistController {
  static async createPlaylist(req, res) {
    const { title } = Controller.getParams(req);
    let resData = {};

    try {
      const playlist = await PlaylistService.createPlaylist(title, req.user);
      resData = playlist;
    } catch (err) {
      switch (err.name) {
        case "ValidationError":
          res.status(400);
          resData = {
            errors: {
              validation: "Validation error",
            },
          };
          break;
        default:
          console.error(err);
          res.status(500);
          resData = {
            errors: { server: "err-internal" },
          };
      }
    }

    return res.json(resData);
  }

  static async deletePlaylist(req, res) {
    const { playlistId } = Controller.getParams(req);
    let resData = {};

    try {
      const deletedId = await PlaylistService.deletePlaylist(
        playlistId,
        req.user
      );

      resData = {
        id: deletedId,
      };
    } catch (err) {
      switch (err.name) {
        case "AuthorizationError":
          res.status(403);
          resData = {
            errors: {
              auth: "err-not-authorized",
            },
          };
          break;
        case "NotFoundError":
          res.status(404);
          resData = {
            errors: {
              playlist: "err-not-found",
            },
          };
          break;

        default:
          console.error(err);
          res.status(500);
          resData = {
            errors: { server: "err-internal" },
          };
      }
    }

    return res.json(resData);
  }

  static async getFavoritesPlaylist(req, res) {
    try {
      const playlist = await PlaylistService.getFavoritesPlaylist(req.user);
      return res.json(playlist);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ errors: { server: "err-internal" } });
    }
  }

  static async getPlaylist(req, res) {
    const { playlistId, src } = Controller.getParams(req);
    let resData = {};

    try {
      const playlist = await PlaylistService.getPlaylist(
        playlistId,
        src,
        req.user
      );
      resData = playlist;
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res
            .status(404)
            .json({ errors: { resource: "err-not-found" } });
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
      const tracks = await PlaylistService.getPlaylistTracks(playlistId, src);
      resData = tracks;
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res
            .status(404)
            .json({ errors: { resource: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }

    return res.json(resData);
  }

  static async addTrack(req, res) {
    const { playlistId, track } = Controller.getParams(req);

    try {
      const data = await PlaylistService.addTrack(playlistId, track, req.user);
      return res.json(data);
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res
            .status(404)
            .json({ errors: { resource: "err-not-found" } });

        case "AuthorizationError":
          return res
            .status(400)
            .json({ errors: { auth: "err-not-authorized" } });

        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }
  }
}

module.exports = PlaylistController;
