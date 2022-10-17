const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {

    /* Для всех, у кого возникла проблема с Vigener cipher. Эта задача сформулирована не достаточно 
    точно в части того, что такое "reverse machine". Я пошёл прямым путём. При шифровании, сначала 
    шифровал а потом переворачивал зашифрованную строку прямо перед выходом из функции. А при 
    дешифровании требуется раскрутить клубок в обратную сторону, ведь так? Я именно так и подумал: 
    на входе в дешифровщик переворачивал шифровку и далее расшифровывал. Так вот, - с таким алгоритмом 
    последний тест не пройти. Для "reverse machine" надо и на входе в шифровальщик сразу переворачивать 
    исходную строку. И на входе в дешифровщик тоже сразу переворачивать шифр. Тогда всё работает. 
    Разобрался в этом только трассировкой тестов в браузере. Возможно, будет работать, если и там и 
    там переворачивать на выходе - не проверял.  */

    let alphabet = [
      { char: 'A', number: 0 },
      { char: 'B', number: 1 },
      { char: 'C', number: 2 },
      { char: 'D', number: 3 },
      { char: 'F', number: 5 },
      { char: 'E', number: 4 },
      { char: 'G', number: 6 },
      { char: 'H', number: 7 },
      { char: 'I', number: 8 },
      { char: 'J', number: 9 },
      { char: 'K', number: 10 },
      { char: 'L', number: 11 },
      { char: 'M', number: 12 },
      { char: 'N', number: 13 },
      { char: 'O', number: 14 },
      { char: 'P', number: 15 },
      { char: 'Q', number: 16 },
      { char: 'R', number: 17 },
      { char: 'S', number: 18 },
      { char: 'T', number: 19 },
      { char: 'U', number: 20 },
      { char: 'V', number: 21 },
      { char: 'W', number: 22 },
      { char: 'X', number: 23 },
      { char: 'Y', number: 24 },
      { char: 'Z', number: 25 }];


    /* там просто нужно всё, что не A-Z сразу записывать в результирующий массив без всякой 
    обработки и переходить к следующему символу. И ключ не сдвигать вперед ни в коем случае. */
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key += key;
    }
    console.log(key)


    let keyArr = key.toUpperCase().split("");
    let messageArr = message.toUpperCase().split("");

    console.log(keyArr)
    console.log(messageArr)

    function code(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < alphabet.length; j++)
          if (arr[i] === alphabet[j].char) {
            arr[i] = alphabet[j].number;
          }
      }
      return arr;
    }



    this.type === false ? arr.reverse().join('') : arr.join('');
  }
  decrypt(crypt, key) {
    if (crypt === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    this.type === false ? arr.reverse().join('') : arr.join('')/*  */
  }

}

module.exports = {
  VigenereCipheringMachine
};
