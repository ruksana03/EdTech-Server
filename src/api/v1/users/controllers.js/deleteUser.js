const User = require("../../../../models/Users");

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const result = await User.deleteOne(query);
        res.send(result);
    } catch (error) {
        console.log("'error on app.delete('/user/:id'", error)
    }
  }

  module.exports = deleteUser;