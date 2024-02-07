const mongoose = require("mongoose");


const PdfDetailsSchema = new mongoose.Schema({
    teacherName: String,
    teacherEamil: String,
    title: String,
    pdf: String},{collection:"PdfDetails"})
    
mongoose.model("PdfDetails", PdfDetailsSchema)