const SC = require("./sc");
const GT = require("./api");

module.exports = function getApi(src) {
  switch (src) {
    case "soundcloud":
      return SC;

    case "gotunes":
    case "internal":
    default:
      return GT;
  }
};
