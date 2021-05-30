import { test, expect } from '@jest/globals';
import fileTransform from '../src/fileTransform.js';
import { getFixturePath } from '../src/workWhithFiles.js';

test('fileTransform', () => {
  const expectObj = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };
  const pathFile = getFixturePath('after.json');
  expect(fileTransform(pathFile)).toEqual(expectObj);
});
