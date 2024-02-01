const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const authenticationRoutes = require('./routes/v1/authentication/index')
const courseRoutes = require('./routes/v1/courses/index')
const reviewRoutes = require('./routes/v1/reviews/index')
const blogRoutes = require('./routes/v1/blogs/index')
const bookingRoutes = require('./routes/v1/bookings/index')
const paymentRoutes = require('./routes/v1/payments/index')
const userRoutes = require('./routes/v1/users/index')
const userAdminRoutes = require('./routes/v1/userAdmin/index')
const noticeRoutes = require('./routes/v1/notices/index')

applyMiddleware(app)

app.use(authenticationRoutes)
app.use(courseRoutes)
app.use(reviewRoutes)
app.use(blogRoutes)
app.use(bookingRoutes)
app.use(paymentRoutes)
app.use(userRoutes)
app.use(userAdminRoutes)
app.use(noticeRoutes)




app.get("/health", (req, res) => {
  res.send("our server is running");
});

app.all("*",  (req, res,next) => {
    const error = new Error(`The requested url is invalid: [${req.url}] `)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`server is running on port:${port}`);
      });
}

main()
