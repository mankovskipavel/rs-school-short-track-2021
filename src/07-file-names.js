/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function check (index, name, arr) {
  const names = arr;
  let ind = 1;
  let newName = '';
  for (let i = index + 1; i < names.length; i++) {
    if (names[i] === name) {
      newName = `${name}(${ind})`;
      names[i] = newName;
      ind++;
    }
  }
  return names;
}

function renameFiles(names) {
  let arr = names;
  for (let i = 0; i < names.length; i++) {
    arr = check(i, arr[i], arr);
  }
  return arr;
}

module.exports = renameFiles;
