import exifrTransform from "./exifrTransform";

import * as appleNoGPS from "./testData/40B77F2A-FF8E-41FF-8D03-F3E1CBF49825.heic.raw.json";
import * as appleWithGPS from "./testData/603FC7E3-6661-451E-AE7C-C84AE38A0630.jpeg.raw.json";
import * as nikonE5000 from "./testData/20050612. Nick 'Brownman' Ali 040.jpg.raw.json";
import * as canonPowerShot from "./testData/20071231. BNY 006.jpg.raw.json";
import * as samsung from "./testData/20190628_075533.jpg.raw.json";
import * as iPad from "./testData/IMG_0021.jpeg.raw.json";
import * as iPhone4 from "./testData/IMG_0024.jpeg.raw.json";
import * as canonEOSRebelT2i from "./testData/IMG_0034.jpeg.raw.json";
import * as canonEOSRP from "./testData/IMG_0695.jpg.raw.json";
import * as iPhone6 from "./testData/IMG_2845.jpeg.raw.json";
import * as iPhone5 from "./testData/IMG_3231.jpeg.raw.json";
import * as panasonic from "./testData/P1000088.jpeg.raw.json";

describe("exifrTransform", () => {
  test("should return undefined for undefined", () => {
    expect(exifrTransform(undefined)).toBeUndefined();
  });

  test("should return undefined for {}", () => {
    expect(exifrTransform({})).toBeUndefined();
  });

  test("should return correct data for Apple no GPS", () => {
    expect(exifrTransform(appleNoGPS)).toEqual({
      orientation: "Rotate 90 CW",
      dateCreated: "2020-06-20T14:06:19.000Z",
      width: "4032",
      height: "3024",
      monthCreated: "6",
      yearCreated: "2020",
      make: "Apple",
      model: "iPhone 11 Pro",
    });
  });

  test("should return correct data for Apple GPS", () => {
    expect(exifrTransform(appleWithGPS)).toEqual({
      orientation: "Rotate 90 CW",
      dateCreated: "2020-03-21T17:03:44.000Z",
      width: "3088",
      height: "2316",
      latitude: "43.840002777777784",
      longitude: "-79.61357777777778",
      monthCreated: "3",
      yearCreated: "2020",
      make: "Apple",
      model: "iPhone 11 Pro Max",
    });
  });

  test("should return correct data for Nikon ES5000", () => {
    expect(exifrTransform(nikonE5000)).toEqual({
      orientation: "Horizontal (normal)",
      dateCreated: "2005-05-08T21:57:39.000Z",
      width: "1600",
      height: "1200",
      monthCreated: "5",
      yearCreated: "2005",
      make: "NIKON",
      model: "E5000",
    });
  });

  test("should return correct data for Canon PowerShot", () => {
    expect(exifrTransform(canonPowerShot)).toEqual({
      orientation: "Horizontal (normal)",
      dateCreated: "2007-12-25T00:10:20.000Z",
      width: "3072",
      height: "2304",
      monthCreated: "12",
      yearCreated: "2007",
      make: "Canon",
      model: "Canon PowerShot TX1",
    });
  });

  test("should return correct data for Samsung", () => {
    expect(exifrTransform(samsung)).toEqual({
      orientation: "Rotate 90 CW",
      dateCreated: "2019-06-28T11:55:33.000Z",
      width: "4032",
      height: "3024",
      latitude: "43.83306972222223",
      longitude: "-79.53947083333333",
      monthCreated: "6",
      yearCreated: "2019",
      make: "samsung",
      model: "SM-G950W",
    });
  });

  test("should return correct data for iPad", () => {
    expect(exifrTransform(iPad)).toEqual({
      orientation: "Rotate 180",
      dateCreated: "2012-12-19T22:49:53.000Z",
      width: "2592",
      height: "1936",
      latitude: "43.83283333333333",
      longitude: "-79.5395",
      monthCreated: "12",
      yearCreated: "2012",
      make: "Apple",
      model: "iPad",
    });
  });

  test("should return correct data for iPhone4", () => {
    expect(exifrTransform(iPhone4)).toEqual({
      orientation: "Rotate 90 CW",
      dateCreated: "2011-10-21T20:40:51.000Z",
      width: "2592",
      height: "1936",
      latitude: "43.83266666666667",
      longitude: "-79.54",
      monthCreated: "10",
      yearCreated: "2011",
      make: "Apple",
      model: "iPhone 4",
    });
  });

  test("should return correct data for Canon EOS Rebel T2i", () => {
    expect(exifrTransform(canonEOSRebelT2i)).toEqual({
      orientation: "Horizontal (normal)",
      dateCreated: "2010-12-21T02:39:27.000Z",
      width: "5184",
      height: "3456",
      monthCreated: "12",
      yearCreated: "2010",
      make: "Canon",
      model: "Canon EOS REBEL T2i",
    });
  });

  test("should return correct data for Canon EOS RP", () => {
    expect(exifrTransform(canonEOSRP)).toEqual({
      dateCreated: "2021-10-26T19:41:55.000Z",
      monthCreated: "10",
      yearCreated: "2021",
      make: "Canon",
      model: "Canon EOS RP",
    });
  });

  test("should return correct data for iPhone 6", () => {
    expect(exifrTransform(iPhone6)).toEqual({
      orientation: "Rotate 180",
      dateCreated: "2016-08-13T23:55:13.000Z",
      width: "1280",
      height: "960",
      latitude: "45.348463888888894",
      longitude: "-80.20152222222222",
      monthCreated: "8",
      yearCreated: "2016",
      make: "Apple",
      model: "iPhone 6",
    });
  });

  test("should return correct data for iPhone 5", () => {
    expect(exifrTransform(iPhone5)).toEqual({
      orientation: "Horizontal (normal)",
      dateCreated: "2014-03-10T01:53:13.000Z",
      width: "3264",
      height: "2448",
      latitude: "43.832875",
      longitude: "-79.53960555555555",
      monthCreated: "3",
      yearCreated: "2014",
      make: "Apple",
      model: "iPhone 5",
    });
  });

  test("should return correct data for Panasonic", () => {
    expect(exifrTransform(panasonic)).toEqual({
      orientation: "Horizontal (normal)",
      dateCreated: "2007-12-13T02:20:05.000Z",
      width: "640",
      height: "480",
      monthCreated: "12",
      yearCreated: "2007",
      make: "Panasonic",
      model: "DMC-FX10",
    });
  });
});
