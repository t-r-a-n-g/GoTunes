const User = require("./user.model");
const Playlist = require("./playlist.model");

const sequelize = require("../utils/db");

module.exports = {
  User,
  Playlist,

  sequelize,
};
