class Controller {
  static getParams(req) {
    const src = req.query.source || "soundcloud";
    return {
      src,
      ...req.params,
      ...req.body,
      ...req.query,
      currentuser: req.user,
    };
  }
}

module.exports = Controller;
