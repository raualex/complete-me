const Trie = require('../lib/index.js');

module.exports = class Node {
  constructor() {
    this.end = false;
    this.finalWord;
    this.children = {};
  }

}