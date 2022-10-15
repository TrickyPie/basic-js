const { NotImplementedError } = require('../extensions/index.js');

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
  console.log(n)
  let findDigit = [];

  let numberArr = n.toString();

  for (let i = 0; i < numberArr.length; i++) {
    findDigit.push(numberArr.slice(0, i) + numberArr.slice(i + 1))
  }

  console.log(findDigit);

  for (let every of findDigit) {
    every = +every;
  }
  findDigit.sort((a, b) => b - a);
  console.log(findDigit);
  return +findDigit[0];
}

module.exports = {
  deleteDigit
};
