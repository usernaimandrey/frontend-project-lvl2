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

test('genDiff whith Json', () => {
  expect(genDiff(data.pathBeforeJson, data.pathAfterJson)).toEqual(data.expectedData);
});

test('genDiff whith Yml', () => {
  expect(genDiff(data.pathBeforeYml, data.pathAfterYaml)).toEqual(data.expectedData);
});

test('genDiff whith Json & Yaml', () => {
  expect(genDiff(data.pathBeforeJson, data.pathAfterYaml)).toEqual(data.expectedData);
});
