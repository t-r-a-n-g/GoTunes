class Controller {
  static getParams(req) {
    const src = req.query.src || "soundcloud";
    return { src, ...req.params, ...req.body, ...req.query };
  }
}

module.exports = Controller;
