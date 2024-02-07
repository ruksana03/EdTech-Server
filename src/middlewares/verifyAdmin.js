const User = require("../models/Users");

const verifyAdmin = async (req, res, next) => {
  try {
    const email = req.decoded.email; 
    console.log(email)
    // Find the user with the specified email
    const user = await User.findOne({ email: email });

    // Check if the user is an admin
    const isAdmin = user?.role === "admin";
    if (!isAdmin) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyAdmin;
