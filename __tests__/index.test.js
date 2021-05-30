import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff', () => {
  const expectedData = fs.readFileSync(getFixturePath('expect.txt'), 'utf-8');
  const pathBefore = getFixturePath('before.json');
  const pathAfter = getFixturePath('after.json');
  expect(genDiff(pathBefore, pathAfter)).toEqual(expectedData);
});
