const express = require("express");
const http = require('http');
const mongoose = require("mongoose");
const socketio = require('socket.io');
const config = require('./config/default')
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
// Import configuration
const origin = process.env.NODE_ENV === 'development' ? config.LOCAL_CLIENT : config.CLIENT;

// Socket.io connection
const io = socketio(server, {
  cors: {
    origin: origin,
    methods: ["GET", "POST"]
  }
});


// import routes
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
const memberRoute  = require('./routes/v1/member/index')
const partnerRoutes = require('./routes/v1/partners/index');
const Message = require("./models/Message");
const messageRoutes = require('./routes/v1/messages/index');
const FeedbackRoute = require('./routes/v1/feedback/index');
const coverRoutes = require('./routes/v1/Cover/index')
const offerRoutes = require('./routes/v1/offer/index');
const advertisementRoute = require('./routes/v1/adverties/index')



applyMiddleware(app)


// Connect to MongoDB
connectDB();

 

// Socket.io connection
io.on('connection', (socket) => {
//   console.log('New WebSocket connection');

  // Listen for new messages
  socket.on('sendMessage', async (message) => {
    const newMessage = new Message({ text: message });
    await newMessage.save();
    io.emit('message', { text: message});  
  });
});


// routes
app.use(authenticationRoutes)
app.use(courseRoutes)
app.use(reviewRoutes)
app.use(blogRoutes)
app.use(bookingRoutes)
app.use(paymentRoutes)
app.use(userRoutes)
app.use(quizRoutes)
app.use(Rutine)
app.use(noticeRoutes)
app.use(noteRoutes)
app.use(pdfRoutes)
app.use(recordedRoutes)
app.use(cartRoutes)
app.use(coverRoutes)
app.use(applicationRoutes)
app.use(newsLetterRoutes)
app.use(partnerRoutes)
app.use(memberRoute)
app.use("/files", express.static("files"))
app.use(messageRoutes)
app.use(FeedbackRoute)
app.use(offerRoutes)
app.use(advertisementRoute)



app.get("/", (req, res) => {
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

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
