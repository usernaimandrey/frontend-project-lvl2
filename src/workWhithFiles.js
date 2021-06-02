import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const getAbsPath = (pathFile) => path.resolve(process.cwd(), pathFile);

const readFile = (fileName) => readFileSync(getAbsPath(fileName), 'utf8');

export { getFixturePath, readFile };
