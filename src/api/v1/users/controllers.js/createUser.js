const User = require("../../../../models/Users");

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;

    // Checking if the user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.send({ message: "User already exists", insertedId: null });
    }

    // Create a new instance of the User model
    const newUser = new User(userData);

    // Save the new user to the database
    const result = await newUser.save();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;