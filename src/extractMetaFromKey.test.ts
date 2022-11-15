import extractMetaFromKey from "./extractMetaFromKey";

describe("extractMetaFromKey", () => {
  test("should return undefined for undefined", () => {
    expect(extractMetaFromKey(undefined)).toBeUndefined();
  });

  test("should return undefined for null", () => {
    expect(extractMetaFromKey(null)).toBeUndefined();
  });

  test("should return undefined empty line", () => {
    expect(extractMetaFromKey("")).toBeUndefined();
  });

  test("should return undefined for random string", () => {
    expect(extractMetaFromKey("random string")).toBeUndefined();
  });

  test("should return undefined for non ANSI start of the name", () => {
    expect(extractMetaFromKey("media/108APPLE/RFAS8135.JPG")).toBeUndefined();
  });

  test("should return correct result for normal input", () => {
    expect(
      extractMetaFromKey("media/20000710. Atyrau visit/Aktau_beach.jpg")
    ).toEqual({
      dateCreated: new Date(2000, 7 - 1, 10).toISOString(),
      monthCreated: "7",
      yearCreated: "2000",
    });
  });

  test("should return correct result for normal input 2", () => {
    expect(
      extractMetaFromKey("media/20151110. Atyrau visit/Aktau_beach.jpg")
    ).toEqual({
      dateCreated: new Date(2015, 11 - 1, 10).toISOString(),
      monthCreated: "11",
      yearCreated: "2015",
    });
  });

  test("should return undefined if name is ANSI like but incorrect", () => {
    expect(
      extractMetaFromKey("media/20210000. Furiosa/f4/IMG_9101.JPG")
    ).toBeUndefined();
  });

  test("should return undefined if name is ANSI like but incorrect 2", () => {
    expect(
      extractMetaFromKey("media/20210132. Furiosa/f4/IMG_9101.JPG")
    ).toBeUndefined();
  });

  test("should return undefined if no ANSI", () => {
    expect(extractMetaFromKey("media/honda1.jpg")).toBeUndefined();
  });
});
