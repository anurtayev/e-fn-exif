export default function (
  exifrData: ExifrRawData
): undefined | { [key: string]: string | number } {
  if (!exifrData || Reflect.ownKeys(exifrData).length === 0) return;

  const {
    Orientation: orientation,
    CreateDate: dateCreatedStr,
    ExifImageWidth: width,
    ExifImageHeight: height,
    Make: make,
    Model: model,
    latitude,
    longitude,
  } = exifrData;

  const dateCreated = new Date(dateCreatedStr);

  return {
    ...(make ? { make } : {}),
    ...(model ? { model } : {}),
    ...(orientation ? { orientation } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(latitude ? { latitude } : {}),
    ...(longitude ? { longitude } : {}),
    ...(dateCreated
      ? { dateCreated: dateCreated && dateCreated.toISOString() }
      : {}),
    ...(dateCreated
      ? { monthCreated: dateCreated && dateCreated.getMonth() + 1 }
      : {}),
    ...(dateCreated
      ? { yearCreated: dateCreated && dateCreated.getFullYear() }
      : {}),
  };
}

type ExifrRawData = {
  Make?: string;
  Model?: string;
  Orientation?: string;
  XResolution?: number;
  YResolution?: number;
  ResolutionUnit?: string;
  Software?: string;
  ModifyDate?: string;
  YCbCrPositioning?: number;
  ExposureTime?: number;
  FNumber?: number;
  ExposureProgram?: string;
  ISO?: number;
  ExifVersion?: string;
  DateTimeOriginal?: string;
  CreateDate?: string;
  OffsetTime?: string;
  OffsetTimeOriginal?: string;
  OffsetTimeDigitized?: string;
  ShutterSpeedValue?: number;
  ApertureValue?: number;
  BrightnessValue?: number;
  ExposureCompensation?: number;
  MeteringMode?: string;
  Flash?: string;
  FocalLength?: number;
  ColorSpace?: number;
  ExifImageWidth?: number;
  ExifImageHeight?: number;
  SensingMethod?: string;
  SceneType?: string;
  ExposureMode?: string;
  WhiteBalance?: string;
  FocalLengthIn35mmFormat?: number;
  SceneCaptureType?: string;
  LensInfo?: Array<number>;
  LensMake?: string;
  LensModel?: string;
  CompositeImage?: string;
  latitude?: number;
  longitude?: number;
  GPSLatitudeRef?: string;
  GPSLatitude?: Array<number>;
  GPSLongitudeRef?: string;
  GPSLongitude?: Array<number>;
  GPSAltitudeRef?: { [key: string]: number };
  GPSAltitude?: number;
  GPSSpeedRef?: string;
  GPSSpeed?: number;
  GPSImgDirectionRef?: string;
  GPSImgDirection?: number;
  GPSDestBearingRef?: string;
  GPSDestBearing?: number;
  GPSDateStamp?: string;
  GPSHPositioningError?: number;
};
