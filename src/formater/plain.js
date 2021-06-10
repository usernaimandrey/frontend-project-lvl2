import _ from 'lodash';

const getValue = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const plain = (value) => {
  const iter = (data, path) => {
    const result = data.map((el) => {
      const {
        name, type, value1, value2, children,
      } = el;
      const curetPath = [...path, `${name}`];

      switch (type) {
        case 'updated':
          return `Property '${curetPath.join('.')}' was updated. From ${getValue(value1)} to ${getValue(value2)}`;
        case 'added':
          return `Property '${curetPath.join('.')}' was added with value: ${getValue(value1)}`;
        case 'nested':
          return iter(children, curetPath);
        case 'removed':
          return `Property '${curetPath.join('.')}' was removed`;
        default:
          return [];
      }
    });
    return _.flattenDeep(result).join('\n');
  };
  return iter(value, []);
};

export default plain;
