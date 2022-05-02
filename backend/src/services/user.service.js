const getApi = require("../utils/apis");

class UserService {
  static async getUser(userId, src) {
    const api = getApi(src);

    const user = api.getUser(userId);
    return user;
  }

  static async getPlaylists(userId, src) {
    const api = getApi(src);
    const playlists = api.getUserPlaylists(userId);
    return playlists;
  }
}

module.exports = UserService;
