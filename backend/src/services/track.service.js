const getApi = require("../utils/apis");

class TrackService {
  static async getTrack(trackId, src) {
    const api = getApi(src);
    const track = await api.getTrack(trackId);
    return track;
  }

  static async getTrackStreamUrl(trackId, src) {
    const api = getApi(src);
    const url = await api.getTrackStreamUrl(trackId);
    return url;
  }
}

module.exports = TrackService;
