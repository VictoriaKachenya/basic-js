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
  let arr = str.split('')
  let codeLine = [];
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
          count++;
      } else {
          if (count > 1) {
              codeLine.push(count);
          }
          codeLine.push(arr[i]);
          count = 1;
      }
  }
  return codeLine.join('')
}

module.exports = {
  encodeLine
};
