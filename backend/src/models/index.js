const createRelations = require("./createRelations");

const User = require("./user.model");

const Playlist = require("./playlist.model");
const PlaylistParent = require("./playlistParent.model");
const PlaylistUser = require("./playlistUser.model");
const PlaylistTrack = require("./playlistTrack.model");

const Track = require("./track.model");

const sequelize = require("../utils/db");

module.exports = {
  User,
  Playlist,
  PlaylistParent,
  PlaylistUser,
  PlaylistTrack,

  Track,

  createRelations,
  sequelize,
};
