const User = require("./user.model");
const Track = require("./track.model");
const PlaylistTrack = require("./playlistTrack.model");
const Playlist = require("./playlist.model");
const ParentPlaylist = require("./parentPlaylist.model");
const UserPlaylist = require("./userPlaylist.model");

module.exports = function createRelations() {
  // Playlists
  User.belongsToMany(Playlist, { through: UserPlaylist });
  Playlist.belongsToMany(User, { through: UserPlaylist });

  Playlist.belongsTo(ParentPlaylist, { as: "parent" });
  ParentPlaylist.hasMany(Playlist, { as: "playlists" });

  Playlist.hasMany(Track, { as: "tracks" });
  Track.belongsToMany(Playlist, { through: PlaylistTrack });
};
