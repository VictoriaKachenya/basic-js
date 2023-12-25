const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let deletedSymbols = []
  let s2Array = s2.split('')
  for (let i=0; i<s1.length ; i++) {
    let indx = s2Array.indexOf(s1[i])
    if (indx == -1) {
      continue
    }
    s2Array.splice(indx, 1)
    deletedSymbols.push(s1[i])
  }
  return deletedSymbols.length
}

module.exports = {
  getCommonCharacterCount
};
