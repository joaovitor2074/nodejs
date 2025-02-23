import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";

const app = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//config
    //template engine
    app.engine('handlebars', engine())
    app.set('view engine', 'handlebars')
    app.set('views', path.join(__dirname, 'views'))

    //mysql 

    //body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


//rotas
    app.get("/jv",(req,res)=>{
        res.send("Hello World")
    })

    app.post("/add", (req,res)=>{
        req.body.titulo
        res.send("texto " + req.body.titulo + " conteudo " + req.body.conteudo)
    })

    app.get('/',(req,res)=>{
        res.render('formulario', {titulo: "Bem-vindo", subtitulo: "Teste"})
    })


app.listen(2074, ()=>{console.log("servidor rodando")})


