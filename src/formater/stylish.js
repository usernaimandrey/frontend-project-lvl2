import _ from 'lodash';

const stylish = (value, replacer = ' ', spacesCount = 2) => {
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

  return iter(value, 1);
};

export default stylish;
