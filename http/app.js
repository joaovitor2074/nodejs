import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
});

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/html/sobra.html");
});

app.get("/blog", (req, res) => {
    res.send("bem vindo ao meu blog");
});

app.get("/ola/:nome/:cargo", (req, res) => {
    res.send("ola " + req.params.nome + "<br/> seu cargo: " + req.params.cargo);
});

app.listen(2074, () => {
    console.log("servidor rodando");
});
