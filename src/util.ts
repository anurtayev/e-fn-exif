import { extname } from "path";

export const isKeyExtensionAllowed = (ext: string): boolean =>
  process.env.ALLOWED_EXTENSIONS.split("|").includes(ext);

export const getExtension = (key: string): string =>
  extname(key).toLowerCase().slice(1);
