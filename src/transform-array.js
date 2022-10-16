const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr)
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let compareArr = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ]

  let newArr = [...arr];
  let resultArr = [...arr];

  for (let i = 0; i < resultArr.length; i++) {
    switch (arr[i]) {
      case compareArr[0]:
        newArr.splice(i + 1, 1);
        break;

      case compareArr[1]:
        if (newArr[i - 2] === compareArr[0]) {
          continue;
        } else if (i !== 0) {
          newArr.splice(i - 1, 1);
        }
        break;

      case compareArr[2]:
        if (i !== newArr.length - 1) {
          newArr.splice(i + 1, 0, newArr[i + 1]);
        }
        break;

      case compareArr[3]:
        if (newArr[i - 2] === compareArr[0]) {
          continue;
        } else if (i !== 0) {
          newArr.splice(i + 1, 0, newArr[i - 1]);
        }
        break;
      default:
    }
  }

  return newArr.filter((elem) => !compareArr.includes(elem));

  /* --discard-next excludes the next element of the array from the transformed array.
  --discard-prev excludes the previous element of the array from the transformed array.
  --double-next duplicates the next element of the array in the transformed array.
  --double-prev duplicates the previous element of the array in the transformed array. */

}

module.exports = {
  transform
};
