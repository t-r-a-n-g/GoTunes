const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const PlaylistTrack = sequelize.define(
  "playlistTrack",
  {
    // Sequelize generates the id columns
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   allowNull: false,
    // },

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  { tableName: "playlist_tracks", timestamps: false }
);

module.exports = PlaylistTrack;
