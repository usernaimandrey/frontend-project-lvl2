import { readFile } from './workWhithFiles.js';
import parsers from './parsers.js';

const fileTransform = (fileName) => {
  const data = readFile(fileName);
  return parsers(data, fileName);
};

export default fileTransform;
