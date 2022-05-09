const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

// A ParentPlaylist is a playlist from a foreign source like soundcloud.
// It is used to be able to mix our own playlists with foreign playlists
// without importing the foreign playlist. This way the foreign playlist
// stays up to date with its source

const PlaylistParent = sequelize.define(
  "playlistParent",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    // we use string datatype since different sources may have different IDs,
    // which may not be an INT (e.g. mongo Object ID)
    foreign_id: {
      type: DataTypes.STRING,
      allowNUll: false,
    },

    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "playlist_parents" }
);

module.exports = PlaylistParent;
