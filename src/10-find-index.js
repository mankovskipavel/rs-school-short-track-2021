/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let index = Math.floor(array.length / 2);
  /**
  *while (array[index] !== value) {
  *for (let i = 0; i < 4; i++) {
  */
  while (array[index] !== value) {
    if (array[index] > value) {
      end = index;
      index = start + Math.floor((end - start) / 2);
    } else {
      start = index;
      index = start + Math.ceil((end - start) / 2);
    }
  }
  return index;
}

module.exports = findIndex;
