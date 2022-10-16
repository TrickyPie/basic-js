const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainLength: 0,
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    for (let every of this.chain) {
      result = `${result}( ${every} )~~`;
    }
    result = result.slice(0, result.length - 2);
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
