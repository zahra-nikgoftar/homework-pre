const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");
const Post = require("./post");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

User.hasMany(Post, { foreignKey: { allowNull: false } });
Post.belongsTo(User);

module.exports = User;