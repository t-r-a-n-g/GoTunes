const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },

    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    language: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    soundcloud_username: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    kind: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user"
    },

    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "internal"
    }
  },
  { tableName: "users" }
);

module.exports = User;
