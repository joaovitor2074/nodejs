import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { create } from 'express-handlebars' // Correção aqui!
import { Sequelize } from 'sequelize'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Conexão com o banco de dados
const sequelize = new Sequelize("jv", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

// Teste de conexão ao banco
sequelize.authenticate()
    .then(() => console.log("Conexão bem-sucedida com o banco de dados!"))
    .catch(err => console.error("Erro ao conectar ao banco:", err))

// Configuração do Handlebars
const hbs = create({
    defaultLayout: false
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

// Middleware para processar JSON e dados de formulário
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Rota principal
app.get("/", (req, res) => {
    res.render("home", { titulo: "Bem-vindo", subtitulo: "Teste" })
})

// Rota POST para adicionar dados
app.post("/slaoq", (req, res) => {
    const { nome, sobrenome} = req.body // Correção aqui!
    if (!nome || !sobrenome) {
        return res.status(400).send("Erro: Campos título e conteúdo são obrigatórios!")
    }
    res.send(`Texto: ${nome} | Conteúdo: ${sobrenome}`)
})

// Inicialização do servidor
const PORT = 2074
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
