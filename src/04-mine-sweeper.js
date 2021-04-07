/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function countMine(i, j, matrix) {
  let res = 0;
  let err = 0;
  try {
    if (matrix[i - 1][j - 1]) {
      res++;
    }
  } catch (e) {
    err++;
  }

  try {
    if (matrix[i - 1][j]) {
      res++;
    }
  } catch (e) {
    err++;
  }

  try {
    if (matrix[i - 1][j + 1]) {
      res++;
    }
  } catch (e) {
    err++;
  }

  try {
    if (matrix[i][j + 1]) {
      res++;
    }
  } catch (e) {
    err++;
  }

  try {
    if (matrix[i + 1][j + 1]) {
      res++;
    }
  } catch (e) {
    err++;
  }

  try {
    if (matrix[i + 1][j]) {
      res++;
    }
  } catch (e) {
    err++;
  }

  try {
    if (matrix[i + 1][j - 1]) {
      res++;
    }
  } catch (e) {
    err++;
  }

  try {
    if (matrix[i][j - 1]) {
      res++;
    }
  } catch (e) {
    err++;
  }
  if (err) err++;
  return res;
}

function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = countMine(i, j, matrix);
    }
  }
  return result;
}

module.exports = minesweeper;
