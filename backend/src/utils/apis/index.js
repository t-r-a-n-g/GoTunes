const SC = require("./sc");

module.exports = function getApi(src) {
  switch (src) {
    case "soundcloud":
      return SC;

    case "all":
    default:
      return [SC];
  }
};
