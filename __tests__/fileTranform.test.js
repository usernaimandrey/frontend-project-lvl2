import { test, expect, beforeAll } from '@jest/globals';
import fileTransform from '../src/fileTransform.js';
import { getFixturePath } from '../src/workWhithFiles.js';

let expectObj;
beforeAll(() => {
  expectObj = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };
});

test('fileTransform whith .json', () => {
  const pathFile = getFixturePath('after.json');
  expect(fileTransform(pathFile)).toEqual(expectObj);
});

test('fileTransform whith .yaml', () => {
  const pathFile = getFixturePath('after.yaml');
  expect(fileTransform(pathFile)).toEqual(expectObj);
});
