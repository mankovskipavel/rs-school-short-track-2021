/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const mymap = {};
  let str = '';
  let dns = '';
  let index = -1;
  for (let i = 0; i < domains.length; i++) {
    dns = '';
    str = domains[i];
    index = str.lastIndexOf('.');
    while (index !== -1) {
      dns += str.slice(index, str.length);
      if (Object.keys(mymap).includes(dns)) {
        mymap[dns]++;
      } else {
        mymap[dns] = 1;
      }
      str = str.slice(0, index);
      index = str.lastIndexOf('.');
    }
    dns += '.';
    dns += str;
    if (Object.keys(mymap).includes(dns)) {
      mymap[dns]++;
    } else {
      mymap[dns] = 1;
    }
  }
  return mymap;
}

module.exports = getDNSStats;
