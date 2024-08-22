import {
  S3Client,
  DeleteObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const bucketName = process.env.BUCKET;
const region = process.env.REGION;
const accessKeyId = process.env.KEY_ID;
const secretAccessKey = process.env.ACCESS_KEY;

console.log(
  "bucketName",
  bucketName,
  "region",
  region,
  "accessKeyId",
  accessKeyId,
  "secretAccessKey",
  secretAccessKey
);

if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
  throw new Error("Error en las variables de entorno");
}

const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const uploadObject = (
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string
) => {
  return s3.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Body: fileBuffer,
      Key: fileName,
      ContentType: mimeType,
    })
  );
};

export const deleteObject = (fileName: string) => {
  return s3.send(
    new DeleteObjectCommand({
      Bucket: bucketName,
      Key: fileName,
    })
  );
};
