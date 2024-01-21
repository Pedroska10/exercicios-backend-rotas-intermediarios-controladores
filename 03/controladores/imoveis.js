const imoveis = require("../dados/imoveis");

const get = (req, res) => {
  return res.send(imoveis);
};

const getPorId = (req, res) => {
  const { id } = req.params;

  for (item of imoveis) {
    if ((item.id = id)) {
      return res.send(item);
    }
    return res.send(imoveis[id]);
  }
};

module.exports = { get, getPorId };
