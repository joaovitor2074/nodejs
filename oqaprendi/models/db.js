import { Sequelize } from "sequelize";
const sequelize = new Sequelize("jv", "root", "", {
    host: "localhost",
    dialect: "mysql",
})

export { Sequelize, sequelize };
