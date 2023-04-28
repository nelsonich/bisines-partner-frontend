/* eslint-disable no-unused-vars */

import { createContext } from 'react';

export const SIZE_960 = '960x960';
export const SIZE_350 = '350x350';
export const SIZE_128 = '128x128';
export const SIZE_64 = '64x64';
export const SIZE_ORIGINAL = 'original';

const AwsS3ThumbnailContext = createContext({
  thumbnailBySize: (key, size) => {},
  thumbnail960: (key) => {},
  thumbnail350: (key) => {},
  thumbnail128: (key) => {},
  thumbnail64: (key) => {},
  thumbnailOriginal: (key) => {},
  SIZE_960,
  SIZE_350,
  SIZE_128,
  SIZE_64,
  SIZE_ORIGINAL,
});

export default AwsS3ThumbnailContext;
