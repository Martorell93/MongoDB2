//Import mongoose
const { builtinModules } = require("module");
const mongoose = require("mongoose");

//Creo el Schema
const PhotosSchema = new mongoose.Schema(
    {
        nombreUsuario: String,
        url: {
            type: String,
            validate: [
                function(url) {
                    return url.includes("https://");
                }, 
                "La url no es correcta"
            ]
        },
        titulo: String,
        descripcion: String
    }
)

//Export
module.exports = mongoose.model("Photo", PhotosSchema);