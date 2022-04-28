const getApi = require("../utils/apis");
const { User, UserProfile /* Playlist */ } = require("../models");
const { NotFoundError } = require("../exceptions");

class UserService {
  static async getUser(userId) {
    const user = await User.findOne({
      where: { id: userId },
      include: UserProfile,
    });
    if (!user) throw new NotFoundError();

    return {
      id: user.id,
      username: user.username,
      avatar: user.userProfile.avatar,
      biography: user.userProfile.biography,
      kind: "user",
    };
  }

  static async getPlaylists(userId, src) {
    const api = getApi(src);
    const playlists = api.getUserPlaylists(userId);
    return playlists;
  }
}

module.exports = UserService;
