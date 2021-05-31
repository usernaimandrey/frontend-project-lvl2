import { test, expect, beforeAll } from '@jest/globals';
import { readFile, getFixturePath } from '../src/workWhithFiles.js';
import genDiff from '../src/index.js';

const data = {};

beforeAll(() => {
  data.expectedData = readFile(getFixturePath('expect.txt'));
  data.pathBeforeJson = getFixturePath('before.json');
  data.pathAfterJson = getFixturePath('after.json');
  data.pathBeforeYml = getFixturePath('before.yml');
  data.pathAfterYaml = getFixturePath('after.yaml');
});

test('genDiff whith Json & yml', () => {
  expect(genDiff(data.pathBeforeJson, data.pathAfterJson)).toEqual(data.expectedData);
  expect(genDiff(data.pathBeforeJson, data.pathAfterYaml)).toEqual(data.expectedData);
  expect(genDiff(data.pathBeforeYml, data.pathAfterYaml)).toEqual(data.expectedData);
});
