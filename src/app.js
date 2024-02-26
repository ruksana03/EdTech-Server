const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

const authenticationRoutes = require('./routes/v1/authentication/index')
const courseRoutes = require('./routes/v1/courses/index')
const reviewRoutes = require('./routes/v1/reviews/index')
const blogRoutes = require('./routes/v1/blogs/index')
const bookingRoutes = require('./routes/v1/bookings/index')
const paymentRoutes = require('./routes/v1/payments/index')
const userRoutes = require('./routes/v1/users/index')
// const userAdminRoutes = require('./routes/v1/userAdmin/index')
const noticeRoutes = require('./routes/v1/notices/index')
const noteRoutes = require('./routes/v1/note/index')

const pdfRoutes = require('./routes/v1/pdf/index')
const recordedRoutes = require('./routes/v1/recordedVideo/index')
const cartRoutes = require('./routes/v1/carts/index')
const applicationRoutes = require('./routes/v1/application/index')
const quizRoutes = require('./routes/v1/quiz/index')
const Rutine = require('./routes/v1/rutine/index')
const newsLetterRoutes = require('./routes/v1/subscribe/index')
const partnerRoutes = require('./routes/v1/partners/index')
const memberRoute  = require('./routes/v1/member/index')

applyMiddleware(app)


app.use(authenticationRoutes)
app.use(courseRoutes)
app.use(reviewRoutes)
app.use(blogRoutes)
app.use(bookingRoutes)
app.use(paymentRoutes)
app.use(userRoutes)
app.use(quizRoutes)
app.use(Rutine)
app.use(memberRoute)

// app.use(userAdminRoutes)
app.use(noticeRoutes)
app.use(noteRoutes)


app.use(pdfRoutes)
app.use(recordedRoutes)

app.use(cartRoutes)
app.use(applicationRoutes)
app.use(newsLetterRoutes)
app.use(partnerRoutes)
app.use("/files", express.static("files"))



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
