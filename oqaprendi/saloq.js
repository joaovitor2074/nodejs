import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
// Não é mais necessário importar o body-parser se você usar express diretamente
// import bodyParser from "body-parser";
import Sequelize from 'sequelize';

const app = express();

// Configurar diretórios e paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Conexão com o banco de dados
const sequelize = new Sequelize('jv', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

// Testar a conexão com o banco
sequelize.authenticate()
    .then(() => console.log("Conectado ao banco de dados!"))
    .catch((err) => console.error("Erro de conexão:", err));

// Configuração do Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Usar as funções do express para parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.render("home", { titulo: "Bem-vindo", subtitulo: "Teste" });
});

// Rota para testar o envio de dados via POST
app.post("/slaoq", (req, res) => {
    res.send(`Nome: ${req.body.nome} | Sobrenome: ${req.body.sobrenome}`);
});

// Iniciar servidor
app.listen(2074, () => {
    console.log("Servidor rodando na porta 2074! 🚀");
});
