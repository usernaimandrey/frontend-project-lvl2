import fileTransform from './fileTransform.js';
import buildAst from './formater/buildAst.js';
import stylish from './formater/stylish.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const objBefore = fileTransform(filePath1);
  const objAfter = fileTransform(filePath2);
  const treeAst = buildAst(objBefore, objAfter);
  switch (format) {
    case 'stylish':
      return stylish(treeAst);
    default:
      return treeAst;
  }
};

export default genDiff;
