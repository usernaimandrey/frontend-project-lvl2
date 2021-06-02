import _ from 'lodash';

const buildAst = (data1, data2) => {
  const unionKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = unionKeys.reduce((acc, key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])
      && !_.isEqual(data1[key], data2[key])) {
      return { ...acc, [`  ${key}`]: buildAst(data1[key], data2[key]) };
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { ...acc, [`- ${key}`]: data1[key] };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { ...acc, [`+ ${key}`]: data2[key] };
    }
    return (_.has(data1, key) && _.has(data2, key) && _.isEqual(data1[key], data2[key]))
      ? { ...acc, [`  ${key}`]: data1[key] }
      : { ...acc, [`- ${key}`]: data1[key], [`+ ${key}`]: data2[key] };
  }, {});
  return result;
};

export default buildAst;
