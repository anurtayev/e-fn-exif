import { Tag } from "@aspan/sigma";

export default (
  exifData: {
    [key: string]: string | null | undefined;
  } = {}
): Array<Tag> => {
  if (Reflect.ownKeys(exifData).length === 0) return;

  return Reflect.ownKeys(exifData).map((key) => ({
    name: (key as string).toLowerCase(),
    value: exifData[key as string] ? String(exifData[key as string]) : null,
  }));
};
