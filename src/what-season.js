const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date || date === undefined || date === null) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof (Date))) {
    throw new Error("Invalid date!");
  }
  try {
    date.getTime()
  } catch (err) {
    throw new Error('Invalid date!')
  }

  let currentMonth = date.getMonth() + 1;

  if (currentMonth >= 3 && currentMonth <= 5) {
    return "spring";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    return "summer";
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    return "fall";
  } else {
    return "winter"
  }


  /*  Надо проверять его наличие (одна проверка) и то, что он является датой, причем 
   не поддельной (другая проверка) - есть пара тестов, которые 
   подсовывают поддельную дату */

}

module.exports = {
  getSeason
};
