var express = require("express");
const {
  createUser,
  findAllUser,
  findOneUser,
  deleteUser
} = require("../../../api/v1/users/controllers.js");

var router = express.Router();

router.post("/users", createUser);
router.get("/users", findAllUser);
router.get("/users/:id", findOneUser);
router.delete("/user/:id",deleteUser);

module.exports = router;
