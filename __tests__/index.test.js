import { readFile, getFixturePath } from '../src/workWhithFiles.js';
import genDiff from '../src/index.js';

const expectedStylish = readFile(getFixturePath('stylish.txt'));
const expectedPlain = readFile(getFixturePath('plain.txt'));
const expectedJson = readFile(getFixturePath('json.txt'));
const pathBeforeJson = getFixturePath('before.json');
const pathAfterJson = getFixturePath('after.json');
const pathBeforeYml = getFixturePath('before.yml');
const pathAfterYaml = getFixturePath('after.yaml');

test('genDiff whith Json & yml', () => {
  expect(genDiff(pathBeforeJson, pathAfterJson)).toEqual(expectedStylish);
  expect(genDiff(pathBeforeJson, pathAfterYaml)).toEqual(expectedStylish);
  expect(genDiff(pathBeforeYml, pathAfterYaml)).toEqual(expectedStylish);
  expect(genDiff(pathBeforeJson, pathAfterJson, 'plain')).toEqual(expectedPlain);
  expect(genDiff(pathBeforeJson, pathAfterYaml, 'plain')).toEqual(expectedPlain);
  expect(genDiff(pathBeforeYml, pathAfterYaml, 'plain')).toEqual(expectedPlain);
  expect(genDiff(pathBeforeJson, pathAfterJson, 'json')).toEqual(expectedJson);
  expect(genDiff(pathBeforeJson, pathAfterYaml, 'json')).toEqual(expectedJson);
  expect(genDiff(pathBeforeYml, pathAfterYaml, 'json')).toEqual(expectedJson);
});
