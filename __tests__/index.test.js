import { test, expect } from '@jest/globals';
import { readFile, getFixturePath } from '../src/workWhithFiles.js';
import genDiff from '../src/index.js';

test('genDiff', () => {
  const expectedData = readFile(getFixturePath('expect.txt'));
  const pathBefore = getFixturePath('before.json');
  const pathAfter = getFixturePath('after.json');
  expect(genDiff(pathBefore, pathAfter)).toEqual(expectedData);
});
