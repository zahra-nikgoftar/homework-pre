const isTruthyOrFalsyValue = require("./0-isTruthyOrFalsy");

describe("isTruthyOrFalsy", () => {
  test("truthy values", () => {
    expect(isTruthyOrFalsyValue(100)).toBeTruthy();
    expect(isTruthyOrFalsyValue({})).toBeTruthy();
    expect(isTruthyOrFalsyValue([])).toBeTruthy();
  });
  test("falsy values", () => {
    expect(isTruthyOrFalsyValue("")).toBeFalsy();
    expect(isTruthyOrFalsyValue(0)).toBeFalsy();
    expect(isTruthyOrFalsyValue(null)).toBeFalsy();
    expect(isTruthyOrFalsyValue(undefined)).toBeFalsy();
    expect(isTruthyOrFalsyValue(NaN)).toBeFalsy();
    expect(isTruthyOrFalsyValue(false)).toBeFalsy();
  });
});
