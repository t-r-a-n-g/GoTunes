const User = require("./user.model");
const UserProfile = require("./userProfile.model");

const Artist = require("./artist.model");

const Track = require("./track.model");
const ExternalTrack = require("./externalTrack.model");

const PlaylistTrack = require("./playlistTrack.model");
const Playlist = require("./playlist.model");
const PlaylistParent = require("./playlistParent.model");
const PlaylistUser = require("./playlistUser.model");

module.exports = function createRelations() {
  // Profile
  User.hasOne(UserProfile);
  UserProfile.belongsTo(User);

  // Playlists
  User.belongsToMany(Playlist, { through: PlaylistUser });
  Playlist.belongsToMany(User, { through: PlaylistUser });
  User.hasMany(PlaylistUser);
  PlaylistUser.belongsTo(User);
  Playlist.hasMany(PlaylistUser);
  PlaylistUser.belongsTo(Playlist);

  Playlist.belongsTo(PlaylistParent);
  PlaylistParent.hasMany(Playlist);

  Playlist.belongsToMany(Track, { through: PlaylistTrack });
  Track.belongsToMany(Playlist, { through: PlaylistTrack });

  Playlist.belongsToMany(ExternalTrack, { through: PlaylistTrack });
  ExternalTrack.belongsToMany(Playlist, { through: PlaylistTrack });

  Track.belongsTo(Artist);
  Artist.hasMany(Track);
};
