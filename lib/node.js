const Trie = require('../lib/index.js');

module.exports = class Node {
  constructor(letter) {
    this.data = letter;
    this.next = null;
  }

  deconstructWord(lettersArray) {
    console.log(this)
    console.log(lettersArray)
  }

}