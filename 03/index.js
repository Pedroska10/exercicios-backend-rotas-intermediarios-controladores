const express = require("express");
const app = express();
const rotas = require("./roteador");

app.use(rotas);

app.listen(8000, console.log("servidor rodando na porta 8000"));
