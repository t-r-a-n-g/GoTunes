const createRelations = require("./createRelations");

const User = require("./user.model");
const UserProfile = require("./userProfile.model");

const Artist = require("./artist.model");

const Playlist = require("./playlist.model");
const PlaylistParent = require("./playlistParent.model");
const PlaylistUser = require("./playlistUser.model");
const PlaylistTrack = require("./playlistTrack.model");

const Track = require("./track.model");
const ExternalTrack = require("./externalTrack.model");

const sequelize = require("../utils/db");

module.exports = {
  User,
  UserProfile,

  Playlist,
  PlaylistParent,
  PlaylistUser,
  PlaylistTrack,

  Artist,

  Track,
  ExternalTrack,

  createRelations,
  sequelize,
};
