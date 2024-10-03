const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Post = sequelize.define("post", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  content:DataTypes.STRING(),
});

module.exports = Post;