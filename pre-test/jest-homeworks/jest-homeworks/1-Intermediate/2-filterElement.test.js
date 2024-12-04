const filterElement = require("./2-filterElement");

describe("filterElement function", () => {
  test("returns an empty array when filtering an empty array", () => {
    const result = filterElement([], "grape");
    expect(result).toEqual([]);
  });

  test("returns an array with the matching element when it exists", () => {
    const result = filterElement(["apple", "banana", "apple"], "apple");
    expect(result).toEqual(["apple", "apple"]);
  });
});
