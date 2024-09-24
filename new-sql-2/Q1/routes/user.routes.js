const { Router } = require("express");
const {
getUsers,
getUsersById,
createUser,
updateUser,
deleteUser,
}=require("../controllers/user.controller");


const router = Router();


router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
