const Controller = require("./controller");
const { trackService } = require("../services");

class Track {
  static async getTrack(req, res) {
    let resData = {};
    try {
      const { trackId, src } = Controller.getParams(req);
      const track = await trackService.getTrack(trackId, src);

      resData = track;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }

  static async getStream(req, res) {
    let resData = {};
    try {
      const { trackId, src } = Controller.getParams(req);
      const streamUrl = await trackService.getTrackStreamUrl(trackId, src);

      resData = streamUrl;
    } catch (err) {
      console.error(err);
      res.status = 500;
      resData = { error: "Internal server error" };
    }

    return res.json(resData);
  }
}

module.exports = Track;
