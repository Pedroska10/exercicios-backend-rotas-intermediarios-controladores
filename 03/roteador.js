const express = require("express");
const rotas = express();
const { get, getPorId } = require("./controladores/imoveis");

rotas.get("/imoveis", get);

rotas.get("/imoveis/:id", getPorId);

module.exports = rotas;
