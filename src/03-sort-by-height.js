/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sort(index, arr) {
  let result = [];
  result = arr;
  const current = result[index];
  let min = current;
  let indexOfmin = index;
  for (let i = index + 1; i < result.length; i++) {
    if (result[i] !== -1 && min > result[i]) {
      min = result[i];
      indexOfmin = i;
    }
  }
  result[indexOfmin] = current;
  result[index] = min;
  return result;
}

function sortByHeight(arr) {
  let result = arr;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== -1) {
      result = sort(i, result);
    }
  }
  return result;
}

module.exports = sortByHeight;
