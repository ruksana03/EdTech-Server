const User = require("../../../../models/Users");

const findRole = async (req, res) => {
  try {
    const email = req.query.email;
    const query = {email: email}
    const result = await User.find(query) 
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = findRole;