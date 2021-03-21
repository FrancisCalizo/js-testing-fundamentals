// Lesson 2
// We added a simple layer of abstraction in our simple test to make
// writing tests easier. The assertion library will help our test assertions
// read more like a phrase you might say which will help people understand our
// intentions better. It will also help us avoid unnecessary duplication.
const { sum, subtract } = require('../math');

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
