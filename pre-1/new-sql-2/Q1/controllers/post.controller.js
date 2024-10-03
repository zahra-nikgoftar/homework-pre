const User = require("../models/user");
const Post = require("../models/post");

module.exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (error) {
    console.log("error in getPosts controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.getAllPostsForUser = async (req, res) => {
    try {
      const isExistUser = await User.findByPk(req.params.id);
  
      if (!isExistUser) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const posts = await isExistUser.getPosts();
      res.send(posts);
    } catch (error) {
      console.log("error in getAllPostsForUser controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


module.exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).send(post);
  } catch (error) {
    console.log("error in createPost controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      const isExistPost = await Post.findByPk(id);
  
      if (!isExistPost) {
        return res.status(404).json({ message: "post not found!" });
      }
  
      const newData = await isExistPost.update(req.body);
      res.status(200).send(newData);
    } catch (error) {
      console.log("error in createPost controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports.deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const isExistPost = await Post.findByPk(id);
  
      if (!isExistPost) {
        return res.status(404).json({ message: "post not found!" });
      }
  
      await isExistPost.destroy();
      res.status(204).end();
    } catch (error) {
      console.log("error in deletePost controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
