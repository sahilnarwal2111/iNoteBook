const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connectDB = async () => {
    mongoose.connect(mongoURI)
    console.log("Connected to MongoDB")
}
module.exports = connectDB;