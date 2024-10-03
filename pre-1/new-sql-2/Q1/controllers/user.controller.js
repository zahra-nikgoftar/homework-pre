const User = require("../models/user");
const Post = require("../models/post");

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.log("error in getUsers controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (error) {
    console.log("error in getUsersById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.log("error in createUser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const isExistUser = await User.findByPk(id);
  
      if (!isExistUser) {
        return res.status(404).json({ message: "user not found!" });
      }
  
      const newData = await isExistUser.update(req.body);
      res.status(200).send(newData);
    } catch (error) {
      console.log("error in createUser controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const isExistUser = await User.findByPk(id);
  
      if (!isExistUser) {
        return res.status(404).json({ message: "user not found!" });
      }
  
      await isExistUser.destroy();
      res.status(204).end();
    } catch (error) {
      console.log("error in deleteUser controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
