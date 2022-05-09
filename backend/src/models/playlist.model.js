const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Playlist = sequelize.define(
  "playlist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cover: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    duration: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },

    kind: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "playlist",
    },

    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "internal",
    },
  },
  { tableName: "playlists" }
);

module.exports = Playlist;
