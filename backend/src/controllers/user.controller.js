const Controller = require("./controller");
const { UserService } = require("../services");

class UserController {
  static async getUser(req, res) {
    const { userId } = Controller.getParams(req);

    try {
      const user = await UserService.getUser(userId);
      res.json(user);
    } catch (err) {
      switch(err.name) {
        case "NotFoundError":
          return res.status(404).json({ errors: { resource: "err-not-found" } })
        
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } })
      }
    }
  }

  static async getPlaylists(req, res) {
    const { src, userId } = Controller.getParams(req);

    try {
      const playlists = await UserService.getPlaylists(userId, src);
      return res.json(playlists);
    } catch (err) {
      switch (err.name) {
        case "NotFoundError":
          return res.status(404).json({ errors: { resource: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }
  }
}

module.exports = UserController;
