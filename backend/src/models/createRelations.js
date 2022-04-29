const User = require("./user.model");
const Track = require("./track.model");
const PlaylistTrack = require("./playlistTrack.model");
const Playlist = require("./playlist.model");
const PlaylistParent = require("./playlistParent.model");
const PlaylistUser = require("./playlistUser.model");

module.exports = function createRelations() {
  // Playlists
  User.belongsToMany(Playlist, { through: PlaylistUser });
  Playlist.belongsToMany(User, { through: PlaylistUser });

  Playlist.belongsTo(PlaylistParent);
  PlaylistParent.hasMany(Playlist);

  Playlist.hasMany(Track);
  Track.belongsToMany(Playlist, { through: PlaylistTrack });
};