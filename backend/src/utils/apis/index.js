const SC = require("./sc");
const GT = require("./api");

module.exports = function getApi(src) {
  switch (src) {
    case "soundcloud":
      return SC;

    case "gotunes":
    case "internal":
      return GT;

    case "all":
    default:
      return [SC, GT];
  }
};
