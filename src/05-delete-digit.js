/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let newStr = '';
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    newStr = str.slice(0, i) + str.slice(i + 1, str.length);
    if (newStr > max) {
      max = newStr;
    }
  }
  return Number(max);
}

module.exports = deleteDigit;
