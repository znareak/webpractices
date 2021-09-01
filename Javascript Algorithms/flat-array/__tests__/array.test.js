const flatArray = require("../flat-array.libardo");
const assert = require("assert");
const t1 = flatArray([1, [2], 3]);
const t2 = flatArray([[1], [2], [3]]);
const t3 = flatArray([[[1]], [[2]], [[3]]]);
const t4 = flatArray([
  [[1]],
  [[2]],
  [[3]],
  4,
  5,
  [6, 7, [8, [9, [10, [11, [12]]]]]],
]);
const t5 = flatArray([
  [[[[[[[[[[[[[[[1, 2, [[[3, "fun string"]]]]]]]]]]]]]]]]]],
]);

describe("Flat Array", function () {
  it("Planar un arreglo sencillo", function () {
    assert.deepEqual(t1, [1, 2, 3]);
  });

  it("Planar un arreglo de arreglos sencillo", function () {
    assert.deepEqual(t2, [1, 2, 3]);
  });

  it("Planar un arreglo de arreglos profundos", function () {
    assert.deepEqual(t3, [1, 2, 3]);
  });

  it("Planar un arreglo muy profundo", function () {
    assert.deepEqual(t4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("Planar un arreglo muy anidado", function () {
    assert.deepEqual(t5, [1, 2, 3, "fun string"]);
  });
});
