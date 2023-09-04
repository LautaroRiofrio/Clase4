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
    User.destroy({
        where: {
            id: 2
        }
    }).then(() => { console.log("Registro eliminado");})
})
