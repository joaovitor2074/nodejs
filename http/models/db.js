import Sequelize from "sequelize";

// Conexão com o banco de dados
const sequelize = new Sequelize("postagens", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export { Sequelize, sequelize };
