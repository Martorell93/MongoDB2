//Retos día 2 de MongoDB
const mongoose = require("mongoose");
const User = require("./Schemas/UserSchema");
const Photos = require("./Schemas/PhotosSchema");

//Conecto con la BBDD de Mongo
mongoose.connect("mongodb://localhost:27017/instagram", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

//Creo documentos basados en cada modelo
let user1 = new User({
    login: "Juan2344",
    password: "mipassword",
    name: "Juan",
    surname: "Perez",
    dateOfBirth: 1999-09-23,
    rol: "student",
    addres: "Calle turro nº04",
    phone: 600566900,
    email: "neerd@geek.com",
    follow: "Esther_22"
});
let user2 = new User({
    login: "Maria03",
    password: "mipasssword1234",
    name: "Maria",
    surname: "Gomez",
    dateOfBirth: 1989-04-03,
    rol: "teacher",
    addres: "Calle sinounto nº10",
    phone: 633566988,
    email: "mariatheboss@mariaboss.com",
    follow: "Esther_22"
});
let user3 = new User ({
    login: "Esther_22",
    password: "12345877.",
    name: "Esther",
    surname: "Diaz",
    dateOfBirth: 2009-03-22,
    rol: "student",
    addres: "Calle clerina nº04",
    phone: 600511900,
    email: "neerd2@geek.com",
    follow: "Pedro23"
});
let user4 = new User({
    login: "Pedrore23",
    password: "contraseña1234",
    name: "Pedro",
    surname: "Esteban",
    dateOfBirth: 1982-01-23,
    rol: "director",
    addres: "Calle cielo nº01",
    phone: 622800400,
    email: "pedrotheboss@pedroboss.com",
    follow: "Esther_22"
});
let photo1 = new Photos({
    nombreUsuario: "Pedrore23",
    url: "https://wallsdesk.com/wp-content/uploads/2016/11/Morning-Photos.jpg",
    titulo: "Atardecer",
    descripcion: "atardecer en Alemania"
});
let photo2 = new Photos({
    nombreUsuario: "Esther_22",
    url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhddesktopwallpapers.in%2Fwp-content%2Fuploads%2F2015%2F09%2Fcreek-pictures-680x425.jpg&f=1&nofb=1",
    titulo: "Rio rabioso"
});
let photo3 = new Photos({
    nombreUsuario: "Esther_22",
    url: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wave-pictures.jpg",
    titulo: "Ola hawai",
    descripcion: "surf en Hawai"
});
let photo4 = new Photos({
    nombreUsuario: "Esther_22",
    url: "https://www.bambootravel.co.uk/files/img_cache/44224/1400__1503590339_Krabi.jpg?1503590346",
    titulo: "Descanso",
    descripcion: "Vivir la vida"
});

//Callback para saber si se ha guardado correctamente
function checkRespuesta(err, res)
{
    if(err) {
        console.log("Error: " + err);
    }
    else {
        console.log("resultado:");
        console.log(res);
        mongoose.disconnect();
    }
}

// //Reto 1
// //Creo el usuario1
// User.create(user1)
//     .then(function()
//     {
//         console.log("Documento guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function()
//     {
//         console.log("Error");
//         mongoose.disconnect;
//     })

// //Creo las creedenciales2
// Creedentials.create(creedentials2)
//     .then(function()
//     {
//         console.log("Documento guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function()
//     {
//         console.log("Error");
//         mongoose.disconnect;
//     })

// //Busco un documento
// Creedentials.find({}).where("phone").gt(620000000).exec()
//     .then (function(items)
//     {
//         console.log(items);
//         mongoose.disconnect;
//     })
//     .catch(function()
//     {
//         console.log("Error");
//         mongoose.disconnect;
//     })

// //Elimino un documento
// Creedentials.deleteMany({}).where("phone").gt(620000000)
//     .then(function(data)
//     {
//         console.log("Dato borrado correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function()
//     {
//         console.log("Error");
//         mongoose.disconnect;
//     })

//Reto 2
// //Insertamos todos los documentos, de los modelos User y Photo
// User.insertMany([user1, user2, user3, user4])
//     .then(function()
//     {
//         console.log("Documento guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// Photos.insertMany([photo1, photo2, photo3, photo4])
//     .then(function(data)
//     {
//         console.log("Photos guardadas correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// //Busco un documento
// Photos.find({nombreUsuario: "Esther_22"}, {url: 1}).exec()
//     .then (function(items)
//     {
//         console.log(items);
//         mongoose.disconnect();
//     })
//     .catch(function(err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// //Elimino un documento
// Photos.deleteOne({nombreUsuario: "Esther_22"})
//     .then(function(data)
//     {
//         console.log("Dato borrado correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function(err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

//Reto 3
//Función subida de fotos (dado usuario,url,titulo y descp guardarlo en photos)
function subidaFotos(nombreUsuario, url, titulo, descripcion) {
    let nuevo = new Photos({
        nombreUsuario: nombreUsuario, 
        url: url,
        titulo: titulo, 
        descripcion: descripcion});
    Photos.create(nuevo)
        .then(function(data) {
            console.log("Documento creado en la colección Photos");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err)
        {
            console.log(err);
            mongoose.disconnect();
        })
        User.create(user1)
}

//subidaFotos("Esther_22", "https://wallsdesk.com/wp-content/uploads/2016/11/Pictures-of-Chicago-.jpg", "Chichago", "fin de semana vacaciones");

//Función obtener fotos dado un usuario
function obtenerUsuario(usuario) {
    Photos.find({nombreUsuario: usuario}, {nombreUsuario: 0}).exec()
        .then(function(data) {
            console.log("Fotos subidas por el usuario: " + usuario);
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err)
        {
            console.log(err);
            mongoose.disconnect();
        })
}

// obtenerUsuario("Esther_22");

//Función Seguir
function follow(usuario1, usuario2) {
    User.updateOne({login: usuario1}, {follow: usuario2}, checkRespuesta);
}

// follow("Juan2344", "Esther_22");

//Función dejar de seguir
function stopFollow(usuario1,usuario2) {
    User.exists({login: usuario1, follow: usuario2})
        .then (function(data) {
            console.log(data);
            if(data) {
                User.updateOne({login: usuario1}, {follow: null}, checkRespuesta);
            }
            else {
                console.log("El usuario: "+usuario1 + " no sigue a: "
                + usuario2);
                mongoose.disconnect();
            }
        })
        .catch(function(err) {
            console.log(err);
            mongoose.disconnect();
        })
}

// stopFollow("Juan2344", "Esther_22");

//Función eliminar foto, dado un usuario y titulo eliminar foto
function deletePhoto(usuario1, title1) {
    Photos.deleteOne({nombreUsuario: usuario1, titulo: title1})
        .then(function(data) {
            console.log("Foto eliminada correctamente");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err) {
            console.log(err);
            mongoose.disconnect();
        })
}

//deletePhoto("Esther_22", "Ola hawai");

//Función eliminar todas las fotos
function deleteAllPhotos(usuario) {
    Photos.deleteMany({nombreUsuario: usuario})
        .then(function(data) {
            console.log("Fotos eliminadas correctamente");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err) {
            console.log(err);
            mongoose.disconnect();
        })
}

//deleteAllPhotos("Esther_22");