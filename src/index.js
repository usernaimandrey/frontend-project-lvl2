import _ from 'lodash';
import { fileTransform } from './fileTransform.js';

const genDiff = (filePath1, filePath2) => {
  const objBefore = fileTransform(filePath1);
  const objAfter = fileTransform(filePath2);
  const unionKeys = _.sortBy(_.union(_.keys(objBefore), _.keys(objAfter)));
  const result = unionKeys.reduce((acc, key) => {
    if (_.has(objBefore, key) && _.has(objAfter, key) && objBefore[key] === objAfter[key]) {
      return [...acc, `    ${key}: ${objBefore[key]}`];
    }
    if (_.has(objBefore, key) && _.has(objAfter, key) && objBefore[key] !== objAfter[key]) {
      return [...acc, `  - ${key}: ${objBefore[key]}`, `  + ${key}: ${objAfter[key]}`];
    }
    if (_.has(objBefore, key) && !_.has(objAfter, key)) {
      return [...acc, `  - ${key}: ${objBefore[key]}`];
    }
    if (!_.has(objBefore, key) && _.has(objAfter, key)) {
      return [...acc, `  + ${key}: ${objAfter[key]}`];
    }
    return acc;
  }, []);
  return ['{', ...result, '}'].join('\n');
};

export default genDiff;
// console.log(genDiff('__fixtures__/before.json', '__fixtures__/after.json'));
