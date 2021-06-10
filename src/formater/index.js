import stylish from './stylish.js';
import plain from './plain.js';

const formatSwitches = (data, format) => {
  switch (format) {
    case 'plain':
      return plain(data);
    case 'stylish':
      return stylish(data);
    default:
      return console.log('Error unknown file format!!!');
  }
};

export default formatSwitches;
