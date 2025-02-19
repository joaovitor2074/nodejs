import express from "express";
const app = express()

app.get("/", (req,res)=>{
    res.send("jv lindo")
})

app.get("/sobre",(req,res)=>{
    res.send("minha pagina sobre")
})

app.get("/blog",(req,res)=>{
    res.send("bem vindo ao meu blog")
})




app.listen(2074,()=>{
    console.log("servidor rodando")
})