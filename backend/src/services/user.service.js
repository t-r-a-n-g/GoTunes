const getApi = require("../utils/apis");
const db = require("../models");
class UserService {
  static async getUser(userId, src) {
    const api = getApi(src);

    const user = await api.getUser(userId);
    return user;
  }

  static async getPlaylists(userId, src) {
    const api = getApi(src);
    const playlists = await api.getUserPlaylists(userId);
    return playlists;
  }

  static async updateUser(
    username,
    soundcloudUsername,
    avatar,
    biography,
    currentUser
  ) {
    const user = currentUser;

    if (username) user.username = username;
    if (soundcloudUsername) user.soundcloud_username = soundcloudUsername;
    if (avatar) user.userProfile.avatar = avatar;
    if (biography) user.userProfile.biography = biography;

    user.userProfile.save();
    user.save();

    return user;
  }
}

module.exports = UserService;
