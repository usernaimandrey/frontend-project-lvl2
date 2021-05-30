import fs from 'fs';
import path from 'path';

const getAbsPath = (pathFile) => path.resolve(process.cwd(), pathFile);

const fileTransform = (fileName) => {
  const data = fs.readFileSync(getAbsPath(fileName), 'utf8');
  return JSON.parse(data);
};

export { getAbsPath, fileTransform };
