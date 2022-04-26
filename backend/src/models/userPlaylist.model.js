const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const UserPlaylist = sequelize.define(
  "UserPlaylist",
  {
    // Sequelize generates the id columns
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   allowNull: false,
    // },

    // playlist_id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   allowNull: false,
    // },

    can_edit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    is_creator: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { tableName: "user_playlists", timestamps: false }
);

module.exports = UserPlaylist;
