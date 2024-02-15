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
const noticeRoutes = require('./routes/v1/notices/index')
const recordedRoutes = require('./routes/v1/recordedVideo/index')
const notesRoutes = require('./routes/v1/note/index')
const cartRoutes = require('./routes/v1/carts/index')

applyMiddleware(app)

app.use(authenticationRoutes)
app.use(courseRoutes)
app.use(reviewRoutes)
app.use(blogRoutes)
app.use(bookingRoutes)
app.use(paymentRoutes)
app.use(userRoutes)
app.use(notesRoutes)
app.use(noticeRoutes)
app.use(recordedRoutes)
app.use(notesRoutes)
app.use(cartRoutes)
app.use("/files", express.static("files"))

//----------Multer-------------
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  require("./models/PdfDetails");
  const pdfSchema = mongoose.model("PdfDetails");

app.post("/upload-files", upload.single("file"),async(req,res)=>{
    const teacherName = req.body.teacherName;
    const teacherEmail = req.body.teacherEmail;
    const title = req.body.title;
    const fileName = req.file.filename;

    try {
        await pdfSchema.create({teacherName:teacherName, teacherEmail:teacherEmail, title:title, pdf:fileName})
        res.send({status:"ok"});
    } catch (error) {
        res.json({status: error})
    }
   
});

app.get("/get-files", async(req, res)=>{
    try {
        pdfSchema.find({}).then(data=>{
            res.send({status: "ok", data:data});
        })
    } catch (error) {
        
    }
})

// ----------------------------------------------------

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
