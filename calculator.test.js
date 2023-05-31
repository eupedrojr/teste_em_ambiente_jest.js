const calculator = require('./calculator');

describe('Calculator', () => {
  test('Soma dois números', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('Subtrai dois números', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('Multiplica dois números', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('Divide dois números', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });
});
