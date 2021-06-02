import { test, expect, beforeAll } from '@jest/globals';
import fileTransform from '../src/fileTransform.js';
import { getFixturePath } from '../src/workWhithFiles.js';

let expectObj;
beforeAll(() => {
  expectObj = {
    common: {
      follow: false,
      setting1: 'Value 1',
      setting3: null,
      setting4: 'blah blah',
      setting5: {
        key5: 'value5',
      },
      setting6: {
        key: 'value',
        ops: 'vops',
        doge: {
          wow: 'so much',
        },
      },
    },
    group1: {
      foo: 'bar',
      baz: 'bars',
      nest: 'str',
    },
    group3: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
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
