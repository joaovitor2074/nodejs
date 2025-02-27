import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import Post from "./models/Post.js";

const app = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//config

    //template engine
    app.engine(
        "handlebars",
        engine({
          allowProtoPropertiesByDefault: true, 
          allowProtoMethodsByDefault: true, // Permite métodos herdados do Sequelize
        })
      );
      
    app.set('view engine', 'handlebars')
    app.set('views', path.join(__dirname, 'views'))

    //mysql 

    //body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


//rotas

app.get("/pr", (req, res) => {
    Post.findAll({order: [['id', 'DESC']]})
        .then((posts) => {
            res.render("casa", { posts: posts.map(post => post.toJSON()) }); // Converte para JSON
        })
        .catch((err) => {
            res.send("Erro ao buscar posts: " + err);
        });
});


    app.get("/jv",(req,res)=>{
        res.send("Hello World")
    })

    app.post("/add", (req,res)=>{
        Post.create({
            titulo:req.body.titulo,
            conteudo:req.body.conteudo
        })
        .then(()=>{
            res.redirect("/pr")
        })
        .catch ((err)=>{
            res.send("Erro ao criar post" + err)
        })

       
    })

    app.get('/',(req,res)=>{
        res.render('formulario', {titulo: "Bem-vindo", subtitulo: "Teste"})
    })


app.listen(2074, ()=>{console.log("servidor rodando")})


