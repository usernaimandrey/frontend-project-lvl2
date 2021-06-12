import { readFile, getFixturePath } from '../src/workWhithFiles.js';
import genDiff from '../src/index.js';

const data = {};

beforeAll(() => {
  data.expectedStylish = readFile(getFixturePath('stylish.txt'));
  data.expectedPlain = readFile(getFixturePath('plain.txt'));
  data.expectedJson = readFile(getFixturePath('json.txt'));
  data.pathBeforeJson = getFixturePath('before.json');
  data.pathAfterJson = getFixturePath('after.json');
  data.pathBeforeYml = getFixturePath('before.yml');
  data.pathAfterYaml = getFixturePath('after.yaml');
});

test('genDiff whith Json & yml', () => {
  expect(genDiff(data.pathBeforeJson, data.pathAfterJson)).toEqual(data.expectedStylish);
  expect(genDiff(data.pathBeforeJson, data.pathAfterYaml)).toEqual(data.expectedStylish);
  expect(genDiff(data.pathBeforeYml, data.pathAfterYaml)).toEqual(data.expectedStylish);
  expect(genDiff(data.pathBeforeJson, data.pathAfterJson, 'plain')).toEqual(data.expectedPlain);
  expect(genDiff(data.pathBeforeJson, data.pathAfterYaml, 'plain')).toEqual(data.expectedPlain);
  expect(genDiff(data.pathBeforeYml, data.pathAfterYaml, 'plain')).toEqual(data.expectedPlain);
  expect(genDiff(data.pathBeforeJson, data.pathAfterJson, 'json')).toEqual(data.expectedJson);
  expect(genDiff(data.pathBeforeJson, data.pathAfterYaml, 'json')).toEqual(data.expectedJson);
  expect(genDiff(data.pathBeforeYml, data.pathAfterYaml, 'json')).toEqual(data.expectedJson);
});
