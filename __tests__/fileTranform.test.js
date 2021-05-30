import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import { fileTransform } from '../src/fileTransform.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('fileTransform', () => {
  const expectObj = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };
  const pathFile = getFixturePath('after.json');
  expect(fileTransform(pathFile)).toEqual(expectObj);
});
