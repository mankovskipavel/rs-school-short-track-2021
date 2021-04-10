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
  if (str === '') return '';
  let simvol = str[0];
  let count = 0;
  let result = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === simvol) {
      count++;
    } else
    if (count === 0) {
      result += simvol;
      simvol = str[i];
    } else {
      count++;
      result += count;
      result += simvol;
      count = 0;
      simvol = str[i];
    }
  }
  if (count !== 0) {
    count++;
    result += count;
  }
  result += simvol;
  return result;
}

module.exports = encodeLine;
