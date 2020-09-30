const isTasty = require('.');

test('pizza is tasty', () => {
  expect(isTasty('pizza')).toBe(true);
});

test('bagel is tasty', () => {
  expect(isTasty('bagel')).toBe(true);
});

test('licorice is NOT tasty', () => {
  expect(isTasty('licorice')).toBe(false);
});