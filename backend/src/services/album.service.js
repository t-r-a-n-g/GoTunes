const getApi = require("../utils/apis");

class AlbumService {
  static async getAlbum(albumId, targetAPI) {
    const api = getApi(targetAPI);
    const res = await api.getAlbum(albumId);
    return res;
  }

  static async getTracks(albumId, targetAPI) {
    const api = getApi(targetAPI);
    const res = await api.getAlbumTracks(albumId);
    return res;
  }
}

module.exports = AlbumService;
