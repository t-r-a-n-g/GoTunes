const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const UserProfile = sequelize.define(
  "userProfile",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    biography: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  { tableName: "user-profile" }
);

module.exports = UserProfile;
