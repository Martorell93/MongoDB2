//Import mongoose
const mongoose = require("mongoose");

//Creedentials Schema
const CreedentialsSchema = new mongoose.Schema({
    addres: String,
    phone: {
        type: Number,
        min: 600000000,
        max: 700000000
    },
    email: String
});

//Export
module.exports = mongoose.model("Creedentials", CreedentialsSchema);