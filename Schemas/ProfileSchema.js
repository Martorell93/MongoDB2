//Import mongoose
const mongoose = require("mongoose");

//Profile Schema
const ProfileSchema = new mongoose.Schema ({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: {
        type: String,
        enum: ["teacher", "student", "director"]
    }
});

//Export
module.exports = mongoose.model("Profile", ProfileSchema);