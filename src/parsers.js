import { extname } from 'path';
import yaml from 'js-yaml';

export default (data, fileName) => {
  const format = extname(fileName).slice(1);
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === 'yml' || format === 'yaml') {
    return yaml.load(data);
  }
  return console.log('Error unknown file format!!!');
};
