import fileTransform from './fileTransform.js';
import buildAst from './formater/buildAst.js';
import formatSwitches from './formater/index.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const objBefore = fileTransform(filePath1);
  const objAfter = fileTransform(filePath2);
  const treeAst = buildAst(objBefore, objAfter);
  return formatSwitches(treeAst, format);
};

export default genDiff;
