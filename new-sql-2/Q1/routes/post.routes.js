const { Router } = require("express");
const {
    getPosts,
    getAllPostsForUser,
    createPost,
    updatePost,
    deletePost,  
}=require("../controllers/post.controller");


const router = Router();

router.get("/posts",getPosts);
router.get("/users/:userId/posts",getAllPostsForUser);
router.post("/users/:userId/posts",createPost);
router.put("/posts/:id",updatePost);
router.delete("/posts/:id",deletePost);


module.exports = router;