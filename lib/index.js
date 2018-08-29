const Node = require('../lib/node.js');

module.exports = class Trie {
  constructor() {
    this.wordCount = 0;
    this.root = new Node();
  }

  insert(str) {
    let currNode = this.root
    let lettersArray = [...str];
    this.deconstructWord(lettersArray, currNode, str)
    this.count();
  }

  deconstructWord(lettersArray, currNode, str) {
    
    if (!lettersArray.length) {
      currNode.end = true
      currNode.finalWord = str;
      return;
    }

    if (currNode.children[lettersArray[0]]) {
      currNode = currNode.children[lettersArray.shift()]
    } else {
      currNode.children[lettersArray[0]] = new Node();
      currNode = currNode.children[lettersArray.shift()];
    }
    
    return this.deconstructWord(lettersArray, currNode, str);
  }

  count() {
    this.wordCount++;
  }

  suggest(input) {
    let inputArray = [...input];
    let currNode = this.root;
    
    while (inputArray.length) {
      if (currNode.children[inputArray[0]]) {
        currNode = currNode.children[inputArray.shift()]
      } else {
        return 'Sorry, no suggestions available';
      }
    }

  }

}








