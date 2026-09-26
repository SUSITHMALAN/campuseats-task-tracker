const test = require("node:test");
const assert = require("node:assert/strict");
const { tasks, calculateTotal } = require("./tasks");

test("keeps the sample CampusEats task list", () => {
  assert.equal(tasks.length, 3);
});

test("applies the VIP discount", () => {
  assert.equal(calculateTotal(100, 2, "vip"), 180);
});

test("does not discount regular customers", () => {
  assert.equal(calculateTotal(100, 2, "regular"), 200);
});

test("rejects invalid prices and quantities", () => {
  assert.throws(() => calculateTotal(-1, 1, "regular"), /price/);
  assert.throws(() => calculateTotal(Number.NaN, 1, "regular"), /price/);
  assert.throws(() => calculateTotal(1, -1, "regular"), /quantity/);
  assert.throws(() => calculateTotal(1, 1.5, "regular"), /quantity/);
});