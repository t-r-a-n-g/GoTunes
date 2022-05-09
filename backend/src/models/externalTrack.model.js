const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const ExternalTrack = sequelize.define(
  "externalTrack",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    external_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "internal",
    },
  },
  {
    tableName: "external_tracks",
    indexes: [
      {
        name: "external_id",
        fields: ["external_id", "source"],
        unique: true,
      },
    ],
  }
);

module.exports = ExternalTrack;
