const Sequelize = require("sequelize");

// conectar
const sequelize = new Sequelize("claseCuatro", "root", "", {
    host: "localhost",
    dialect: "mariadb"
});

sequelize
.authenticate()
.then(() => {
    console.log("conexion establecida");
})
.catch(error => {
    console.log("no se pudo conectar a la base de datos:", error);
});


class User extends Sequelize.Model {}
User.init({
    name: Sequelize.STRING
}, { sequelize, modelName: "users" });


sequelize.sync()
.then(() => User.create({
    name: "Pepe"
}))
.then(jane => {
    console.log(jane.toJSON());
})
.then(() => {
    User.update({name: "Juancho"}, {
        where: {
            name: "Pepe"
        }
    }).then(() => {
        console.log("registro actualizado");
    })    
})


// puse el update dentro del then porque sino lo ejecutaba antes de que termine la insercion.



