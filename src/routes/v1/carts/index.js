var express = require('express');
 const { createCart, findCart, deleteCart } = require('../../../api/v1/carts/controllers');
var router = express.Router();


router.post("/carts", createCart);

router.get("/carts", findCart );

router.delete("/carts/:id", deleteCart );



module.exports = router;