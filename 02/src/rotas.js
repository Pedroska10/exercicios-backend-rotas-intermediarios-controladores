const express = require("express");
const {
  vezDeJogar,
  consultar,
  remover,
  adicionar,
} = require("./controladores/rodadas");
const rotas = express();

rotas.get("/", vezDeJogar);

// http://localhost:8000/remover/2
rotas.get("/remover/:id", remover);

// http://localhost:8000/adicionar?nome=Luiza
rotas.get("/adicionar", adicionar);

module.exports = rotas;
