const User = require("../../../../models/Users");

const findAllUser = async (req, res, next) => {
  try {
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
    }

    if (req.query?.name) {
      query = { name: new RegExp(req.query.name, "i") };
    }

    const result = await User.find(query);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = findAllUser;