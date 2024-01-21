const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

const vezDeJogar = (req, res) => {
  const nomeJogador = jogadores[jogadorDaVez];

  jogadorDaVez++;

  if (jogadorDaVez >= jogadores.length) {
    jogadorDaVez = 0;
  }

  return res.send(`É a vez de ${nomeJogador} jogar!`);
};

const consultar = (req, res) => {};

const remover = (req, res) => {
  const { id } = req.params;
  jogadores.splice(id, 1);
  return res.send(jogadores);
};

const adicionar = (req, res) => {
  const { nome, indice } = req.query;

  if (!indice) {
    jogadores.push(nome);
  }
  if (indice > jogadores.length) {
    return res.send(
      `O índice informado ${indice} não existe no array. Novo jogador não adicionado.`
    );
  }
  jogadores.splice(indice, 0, nome);
  console.log(nome);
  return res.send(jogadores);
};

module.exports = { vezDeJogar, consultar, remover, adicionar };
