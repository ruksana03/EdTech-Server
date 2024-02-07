const User = require("../../../../models/Users");

const findUserAdmin = async (req, res, next) => {
  try {
    const { email } = req.params 

    // Check if the requested email matches the decoded email in the token
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    // Find the user with the specified email
    const user = await User.findOne({ email: email });

    let admin = false;
    if (user) {
      admin = user?.role === "admin";
    }
    res.send({ admin });
  } catch (error) {
    next(error);
  }
};

module.exports = findUserAdmin;
