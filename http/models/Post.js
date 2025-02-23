import { Sequelize, sequelize } from "./db.js";

const Post = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Criar a tabela apenas se ela não existir
//Post.sync();

export default Post;

