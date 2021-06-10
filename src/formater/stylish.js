import _ from 'lodash';

const render = (value) => {
  const result = value.reduce((acc, el) => {
    const {
      name, type, value1, value2, children,
    } = el;
    switch (type) {
      case 'unchanged':
        return { ...acc, [`  ${name}`]: value1 };
      case 'added':
        return { ...acc, [`+ ${name}`]: value1 };
      case 'removed':
        return { ...acc, [`- ${name}`]: value1 };
      case 'updated':
        return { ...acc, [`- ${name}`]: value1, [`+ ${name}`]: value2 };
      default:
        return { ...acc, [`  ${name}`]: render(children) };
    }
  }, {});
  return result;
};

const stylish = (value, replacer = ' ', spacesCount = 2) => {
  const diffObj = render(value);
  const marker = ['  ', '+ ', '- '];
  const iter = (currentValue, depth) => {
    if (!_.isPlainObject(currentValue)) {
      return `${currentValue}`;
    }
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${marker.includes(key.slice(0, 2)) ? key : `  ${key}`}: ${iter(val, depth + 2)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(diffObj, 1);
};
export default stylish;
