const somar = (req, res) => {
  const { num1, num2 } = req.query;

  if (num1 && num2) {
    return res.send(`${Number(num1) + Number(num2)}`);
  }
  return res.send("Números inválidos");
};

const subtrair = (req, res) => {
  const { num1, num2 } = req.query;

  if (num1 && num2) {
    return res.send(`${num1 - num2}`);
  }
  return res.send("Números inválidos");
};

const multiplicar = (req, res) => {
  const { num1, num2 } = req.query;

  if (num1 && num2) {
    return res.send(`${num1 * num2}`);
  }
  return res.send("Números inválidos");
};

const dividir = (req, res) => {
  const { num1, num2 } = req.query;

  if (num1 && num2) {
    return res.send(`${num1 / num2}`);
  }
  return res.send("Números inválidos");
};

module.exports = { somar, subtrair, multiplicar, dividir };
