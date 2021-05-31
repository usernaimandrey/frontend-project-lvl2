import path from 'path';
import yaml from 'js-yaml';

export default (data, fileName) => {
  const format = path.extname(fileName);
  if (format === '.json') {
    return JSON.parse(data);
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(data);
  }
  return console.log('Error unknown file format!!!');
};
