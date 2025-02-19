import Sequelize from 'sequelize'
const sequelize = new Sequelize('jv','root','',{
    host: "localhost",
    dialect: 'mysql'
})

const postagem = sequelize.define("postagens",{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

postagem.create({
    titulo: "um amor impossivel",
    conteudo: "slk ela me abandonou man :("

})

const usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }

})

usuario.create({
    nome:"jv",
    sobrenome:"salazar",
    idade: 16,
    email: "jvzinn2074@gmail.com"
})

