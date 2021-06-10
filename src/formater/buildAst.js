import _ from 'lodash';

const buildAst = (data1, data2) => {
  const unionKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = unionKeys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        name: key,
        type: 'nested',
        children: buildAst(data1[key], data2[key]),
      };
    }
    if (!_.has(data2, key)) {
      return {
        name: key,
        type: 'removed',
        value1: data1[key],
      };
    }
    if (!_.has(data1, key)) {
      return {
        name: key,
        type: 'added',
        value1: data2[key],
      };
    }
    return (_.isEqual(data1[key], data2[key]))
      ? {
        name: key,
        type: 'unchanged',
        value1: data1[key],
      }
      : {
        name: key,
        type: 'updated',
        value1: data1[key],
        value2: data2[key],
      };
  });
  return result;
};

export default buildAst;
