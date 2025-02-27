import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import Post from "./models/post.js";
import bodyParser from "body-parser"; // Adicionado para capturar req.body

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middleware para capturar dados do body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get("/casa", (req, res) => {
    res.render("casa");
});

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/slaoq", async (req, res) => {
    try {
        await Post.create({
            titulo: req.body.nome,
            descricao: req.body.sobrenome, // Corrigido de 'descrissao' para 'descricao'
        });
        res.redirect("/casa");
    } catch (err) {
        res.send("Erro ao criar post: " + err);
    }
});

// Inicia o servidor
app.listen(2074, () => console.log("Servidor rodando na porta 2074"));
