const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight(arr) {
  let sortingArr = arr.filter(el => el !== -1).sort((a, b) => a - b);
  minusArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      minusArr.push(i)
    }
  }
  console.log(minusArr)

  for (let every of minusArr) {
    sortingArr.splice(every, 0, -1)
  }

  /* for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.push(-1)
    } else {
      for (let j = 0; j < sortingArr.length; j++) {
        newArr.push(sortingArr[j]);
        break;
      }
    }
  } */
  return sortingArr
}

module.exports = {
  sortByHeight
};
