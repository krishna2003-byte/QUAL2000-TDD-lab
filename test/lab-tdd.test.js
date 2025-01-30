//imports
const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");
const { describe, test } = require("node:test");
const assert = require("node:assert");

//Suite and tests
describe("lab-tdd test", () => {
  // Add function tests
  describe("Add function tests", () => {
    test("Add function should return 15 when adding 10 and 5", () => {
      assert.strictEqual(add(10, 5), 15);
    });
    test("Add function should return -3 when adding -8 and 5", () => {
      assert.strictEqual(add(-8, 5), -3);
    });
  });

  // Subtract function tests
  describe("Subtract function tests", () => {
    test("Subtract function should return 5 when subtracting 10 from 15", () => {
      assert.strictEqual(subtract(15, 10), 5);
    });
    test("Subtract function should return -25 when subtracting 20 from -5", () => {
      assert.strictEqual(subtract(-5, 20), -25);
    });
  });

  // Multiply function tests
  describe("Multiply function tests", () => {
    test("Multiply function should return 100 when multiplying 10 and 10", () => {
      assert.strictEqual(multiply(10, 10), 100);
    });
    test("Multiply function should return 0 when multiplying by 0", () => {
      assert.strictEqual(multiply(15, 0), 0);
    });
  });

  // Divide function tests
  describe("Divide function tests", () => {
    test("Divide function should return 5 when dividing 50 over 10", () => {
      assert.strictEqual(divide(50, 10), 5);
    });
    test("Zero division should throw an error", () => {
      assert.throws(() => divide(20, 0), Error);
    });
  });

  // Modulas function tests
  describe("Modulas function tests", () => {
    test("Modulas function should return 1 when finding 10 mod 3", () => {
      assert.strictEqual(modulas(10, 3), 1);
    });
    test("Modulas function should return 0 when finding 20 mod 5", () => {
      assert.strictEqual(modulas(20, 5), 0);
    });
  });

  // Power function tests
  describe("Power function tests", () => {
    test("Power function should return 125 when 5 is raised to the power of 3", () => {
      assert.strictEqual(power(5, 3), 125);
    });
    test("Power function should return 1 when any number is raised to the power of 0", () => {
      assert.strictEqual(power(9, 0), 1);
    });
  });

  // SquareRoot function tests
  describe("SquareRoot function tests", () => {
    test("SquareRoot function should return 5 when finding the square root of 25", () => {
      assert.strictEqual(squareRoot(25), 5);
    });
    test("SquareRoot function should throw an error when finding the square root of a negative number", () => {
      assert.throws(() => squareRoot(-16), Error);
    });
  });

  // Floor function tests
  describe("Floor function tests", () => {
    test("Floor function should return 7 when flooring 7.85", () => {
      assert.strictEqual(floor(7.85), 7);
    });
    test("Floor function should return -6 when flooring -5.99", () => {
      assert.strictEqual(floor(-5.99), -6);
    });
  });

  // Ceiling function tests
  describe("Ceiling function tests", () => {
    test("Ceiling function should return 20 when ceiling 19.1", () => {
      assert.strictEqual(ceiling(19.1), 20);
    });
    test("Ceiling function should return -10 when ceiling -10.1", () => {
      assert.strictEqual(ceiling(-10.1), -10);
    });
  });
});
