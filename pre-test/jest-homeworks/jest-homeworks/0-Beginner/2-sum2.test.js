const sum = require("./2-sum2");

describe("sum", () => {
  test("sum number", () => {
    expect(sum(5, 3)).toBe(8);
  });
  test("error for non-number inputs", () => {
    expect(() => sum(5, "3")).toThrow(TypeError);
    expect(() => sum("4", "5")).toThrow(TypeError);
    expect(() => sum(2, null)).toThrow(TypeError);
  });
});
