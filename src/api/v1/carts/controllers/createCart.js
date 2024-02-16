const Cart = require("../../../../models/Carts");

const createCart = async (req, res) => {
  const cartItem = new Cart(req.body); // Create a new instance of Cart with the request body
  try {
    const result = await cartItem.save(); // Save the cart item to the database
    res.send(result);
  } catch (error) {
    res.status(500).send(error); // Handle any errors
  }
};

module.exports = createCart;
