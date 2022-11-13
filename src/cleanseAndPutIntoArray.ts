import { AttributeValue, InputType } from "@aspan/sigma";

export default (
  exifData: {
    [key: string]: string | number;
  } = {}
): Array<AttributeValue> => {
  if (Reflect.ownKeys(exifData).length === 0) return;

  return Reflect.ownKeys(exifData)
    .filter((key) => Boolean(exifData[key as string]))
    .map((key) => ({
      attribute: {
        name: key as string,
        type:
          typeof exifData[key as string] === "string"
            ? InputType.String
            : InputType.Number,
      },
      value: String(exifData[key as string]),
    }));
};
