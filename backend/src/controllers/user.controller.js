const Controller = require("./controller");
const { UserService } = require("../services");

class UserController {
  static async getUser(req, res) {
    const { userId, src } = Controller.getParams(req);

    try {
      const users = await UserService.getUser(userId, src);
      return res.json(users);
    } catch (err) {
      switch (err.name) {
        default:
          console.error(err);
          return res.status(500);
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
          return res
            .status(404)
            .json({ errors: { resource: "err-not-found" } });
        default:
          console.error(err);
          return res.status(500).json({ errors: { server: "err-internal" } });
      }
    }
  }

  static async updateUser(req, res) {
    const { avatar, biography, username, soundcloudUsername } =
      Controller.getParams(req);

    try {
      const user = await UserService.updateUser(
        username,
        soundcloudUsername,
        avatar,
        biography,
        req.user
      );
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ errors: { server: "err-internal" } });
    }
  }
}

module.exports = UserController;
