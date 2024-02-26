var express = require("express");
const {
  createUser,
  findAllUser,
  findOneUser,
  patchUserToChangeRole,
  findRole,
  putUserToChangeRole
} = require("../../../api/v1/users/controllers.js");


var router = express.Router();

router.post("/users", createUser);
router.get("/users", findAllUser);
router.get("/users/:id", findOneUser);
router.get("/user", findRole);
router.patch('/users/:id', patchUserToChangeRole);
router.put('/users/:id', putUserToChangeRole)

module.exports = router;
