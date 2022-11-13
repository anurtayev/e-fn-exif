import { error, info } from "console";
import { EventBridgeHandler } from "aws-lambda";
import exifr from "exifr";

import {
  isKeyExtensionAllowed,
  getExtension,
  s3,
  documentClient,
} from "@aspan/sigma";

import extractMetaFromKey from "./extractMetaFromKey";
import exifrTransform from "./exifrTransform";
import cleanseAndPutIntoArray from "./cleanseAndPutIntoArray";

export const handler: EventBridgeHandler<
  "Object Created",
  {
    version: string;
    bucket: { name: string };
    object: { key: string; size: number; etag: string; sequencer: string };
    "request-id": string;
    requester: string;
    "source-ip-address": string;
    reason: string;
  },
  void
> = async (event) => {
  info(JSON.stringify(event, null, 2));

  const {
    detail: {
      object: { key, size },
      bucket: { name: bucket },
    },
  } = event;
  const extension = getExtension(key);
  info("key:", key, "bucket:", bucket);

  if (!isKeyExtensionAllowed(extension)) return;

  let exifMeta: object;
  try {
    const buf = (await s3.getObject({ Bucket: bucket, Key: key }).promise())
      .Body;
    const exifrData = await exifr.parse(buf as Buffer);
    exifMeta = exifrTransform(exifrData);
  } catch (e) {
    error(e);
  }

  const meta = {
    id: key,
    attributes: cleanseAndPutIntoArray({
      ...extractMetaFromKey(key),
      ...exifMeta,
      size,
      extension,
    }),
  };
  await documentClient
    .put({ Item: meta, TableName: process.env.META_TABLE })
    .promise();
  info("created meta data entry:", JSON.stringify(meta, null, 2));
};
