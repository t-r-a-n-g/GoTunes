const getApi = require("../utils/apis");

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
}

module.exports = UserService;
