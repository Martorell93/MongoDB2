//Ejemplos de clase
//Import mongoose
const mongoose = require("mongoose");
const { userInfo } = require("os");

//Conectamos con la BBDD
mongoose.connect ("mongodb://localhost:27017/codenotch",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

//Validadores, sirven para comprobar la integridad de los datos
const UserSchema = new User ({
    name: {
        type: String,
        enum: ["Pepe", "Pepa"]
    },
    email: String,
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >= 6;
            },
            "El password debería ser más largo "
        ]
    },
    role: String,
    verified: Boolean,
    age: {
        type: Number,
        min: 18,
        max: 65
    }
});

//Ejemplo de middleware
UserSchema.pre("save", function(next) {
    console.log("Middleware de entrada");
    if (this.age > 20)
    {
        console.log("Has introducido una edad mayor");
        next();
    }
    else {
        console.log("Solo edades mayores que 20");
    }
})

//Operaciones CRUD con promesas
User.create(data)
    .then(function()
    {
        console.log("Documento guardado correctamente");
        mongoose.disconnect();
    })
    .catch(function() {
        console.log("Error al escribir el documento");
    })

User.find({}).where("age").gt(20).exec()
    .then (function(items)
    {
        console.log(items);
        mongoose.disconnect;
    })
    .catch(function()
    {
        console.log("Error");
    })

User.deleteOne({name: "Pepa"})
    .then(function(data)
    {
        console.log("Dato borrado correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function()
    {
        console.log("Error");
    })