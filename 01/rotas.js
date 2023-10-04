const express = require("express");
const {
  somar,
  subtrair,
  multiplicar,
  dividir,
} = require("./controladores/operacoes");

const rotas = express();

rotas.get("/somar", somar);

rotas.get("/subtrair", subtrair);

rotas.get("/multiplicar", multiplicar);

rotas.get("/dividir", dividir);

rotas.listen(3000, console.log("servidor rodando"));

module.exports = rotas;
