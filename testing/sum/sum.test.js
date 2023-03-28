const sum = require('./sum');

test('Adds two numbers', () => {
  expect(sum(20, 30)).toEqual(50);
});
