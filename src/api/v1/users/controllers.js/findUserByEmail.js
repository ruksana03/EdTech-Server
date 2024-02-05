const User = require("../../../../models/Users");


// app.findUserByEmail('/user/email/:email', async (req, res) => {
const findUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await usersCollection.findOne({ email });
        res.send(result);
    } catch (error) {
        console.log("error on app.get('/user/email/:email'")
    }
}

module.exports = findUserByEmail;