import cleanseAndPutIntoArray from "./cleanseAndPutIntoArray";

describe("cleanseAndPutIntoArray", () => {
  test("should return correct value", () => {
    expect(
      cleanseAndPutIntoArray({ a: 1, b: "sdf", K: null, aa: undefined })
    ).toEqual([
      {
        attribute: {
          name: "a",
          type: "NUMBER",
        },
        value: "1",
      },
      {
        attribute: {
          name: "b",
          type: "STRING",
        },
        value: "sdf",
      },
    ]);
  });

  test("should return correct value for undefined", () => {
    expect(cleanseAndPutIntoArray(undefined)).toBeUndefined();
  });
});
