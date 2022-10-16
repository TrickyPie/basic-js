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
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  //На пустоту его вообще не надо проверять. Надо проверять его 
  //наличие (одна проверка) и то, что он является датой, причем 
  //не поддельной (другая проверка) - есть пара тестов, которые 
  //подсовывают поддельную дату
}

module.exports = {
  getSeason
};
