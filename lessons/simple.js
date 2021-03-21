// Lesson 1
// A test is code that throws an error when the actual result of something
// does not match the expected output.

// Tests can get more complicated when you’re dealing with code that depends on
// some state to be set up first (like a component needs to be rendered to the
// document before you can fire browser events, or there needs to be users in
// the database). However, it is relatively easy to test pure functions
// (functions which will always return the same output for a given input and not
// change the state of the world around them).
const { sum, subtract } = require('../math');

let result, expected;

result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
