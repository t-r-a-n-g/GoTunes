const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Track = sequelize.define(
  "Track",
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

    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    stream_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    foreign_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { tableName: "tracks" }
);

module.exports = Track;