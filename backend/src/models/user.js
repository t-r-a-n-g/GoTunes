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
      validate: {
        len: [10],
      },
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
  },
  { tableName: "users" }
);

module.exports = User;
