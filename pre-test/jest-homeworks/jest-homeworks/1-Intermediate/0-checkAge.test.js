const age = require("./0-checkAge");

describe("check age", () => {
  test("age greater than 18", () => {
    expect(age(20)).toBe("You are eligible");
  });
  test("age less than 18", () => {
    expect(age(18)).toBeUndefined();
  });
});
