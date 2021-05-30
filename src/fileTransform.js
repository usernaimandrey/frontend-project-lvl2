import { readFile } from './workWhithFiles.js';

const fileTransform = (fileName) => {
  const data = readFile(fileName);
  return JSON.parse(data);
};

export default fileTransform;
