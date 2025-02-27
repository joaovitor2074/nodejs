import { Sequelize, sequelize } from "./db.js";

const Post = sequelize.define(
    "teste",
    {
        titulo: {
            type: Sequelize.STRING,
            allowNull: false, // Garante que o campo não seja nulo
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    },
);
// sequelize.sync()
//     .then(() => console.log("Tabela sincronizada com sucesso"))
//     .catch(err => console.error("Erro ao sincronizar tabela:", err));

export default Post;
