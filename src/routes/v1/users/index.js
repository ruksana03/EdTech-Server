var express = require ('express');
const { createUser, findAllUser, findOneUser, findUserAdmin,   } = require('../../../api/v1/users/controllers.js');
const verifyAdmin = require('../../../middlewares/verifyAdmin.js');
var router = express.Router()

router.post('/users', createUser);
router.get('/users', findAllUser);
router.get('/users/:id', findOneUser);
router.get('/users/admin/:email',verifyAdmin, findUserAdmin );

module.exports = router;