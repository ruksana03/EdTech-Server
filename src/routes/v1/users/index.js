var express = require("express");
const {
  createUser,
  findAllUser,
  findOneUser,
  patchUserToChangeRole,
  findRole
} = require("../../../api/v1/users/controllers.js");

var router = express.Router();

router.post("/users", createUser);
router.get("/users", findAllUser);
router.get("/users/:id", findOneUser);
router.get("/user", findRole);
router.patch('/users/:id', patchUserToChangeRole);

module.exports = router;
