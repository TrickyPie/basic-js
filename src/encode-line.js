const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let encodingString = [];
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    while (str[i] === str[i + 1]) {
      counter++;
      i++;
    }

    counter > 1 ? encodingString.push(counter, str[i]) : encodingString.push(str[i])
    counter = 1;
  }
  encodingString = encodingString.join('')
  return encodingString;
}

module.exports = {
  encodeLine
};
