const { somar, subtrair } = require('./calculadora');

describe('Testes da Calculadora', () => {
  test('Deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('Deve subtrair dois números corretamente', () => {
    expect(subtrair(10, 4)).toBe(6);
  });
});