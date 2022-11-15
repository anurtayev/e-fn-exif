import cleanseAndPutIntoArray from "./cleanseAndPutIntoArray";

describe("cleanseAndPutIntoArray", () => {
  test("should return correct value", () => {
    expect(
      cleanseAndPutIntoArray({ a: "1", b: "sdf", K: null, aa: undefined })
    ).toEqual([
      { name: "a", value: "1" },
      { name: "b", value: "sdf" },
      { name: "k", value: null },
      { name: "aa", value: null },
    ]);
  });

  test("should return correct value for undefined", () => {
    expect(cleanseAndPutIntoArray(undefined)).toBeUndefined();
  });
});
