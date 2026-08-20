function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = {
  somar,
  subtrair
};

const x = 100; // Variável sem uso para forçar erro no ESLint