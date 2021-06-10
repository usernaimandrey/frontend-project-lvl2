import { readFile, getFixturePath } from '../src/workWhithFiles.js';
import genDiff from '../src/index.js';

const data = {};

beforeAll(() => {
  data.expectedStylish = readFile(getFixturePath('stylish.txt'));
  data.expectPlain = readFile(getFixturePath('plain.txt'));
  data.pathBeforeJson = getFixturePath('before.json');
  data.pathAfterJson = getFixturePath('after.json');
  data.pathBeforeYml = getFixturePath('before.yml');
  data.pathAfterYaml = getFixturePath('after.yaml');
});

test('genDiff whith Json & yml', () => {
  expect(genDiff(data.pathBeforeJson, data.pathAfterJson)).toEqual(data.expectedStylish);
  expect(genDiff(data.pathBeforeJson, data.pathAfterYaml)).toEqual(data.expectedStylish);
  expect(genDiff(data.pathBeforeYml, data.pathAfterYaml)).toEqual(data.expectedStylish);
  expect(genDiff(data.pathBeforeJson, data.pathAfterJson, 'plain')).toEqual(data.expectPlain);
  expect(genDiff(data.pathBeforeJson, data.pathAfterYaml, 'plain')).toEqual(data.expectPlain);
  expect(genDiff(data.pathBeforeYml, data.pathAfterYaml, 'plain')).toEqual(data.expectPlain);
});
