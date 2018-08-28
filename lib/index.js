const Node = require('../lib/node.js');

module.exports = class Trie {
  constructor() {
    this.wordCount = 0;
    this.head = null;
  }

  insert(str) {
   let lettersArray = str.split('');
   let letter = lettersArray.shift();
   let node = new Node(letter);
   this.head = node;
   this.deconstructWord(lettersArray);
   this.count();
  }

  deconstructWord(lettersArray) {
    let currNode = this.head;
    let prevNode;

    while (lettersArray.length !== 0) {
      prevNode = currNode
      let newLetter = lettersArray.shift()
      let newNode = new Node(newLetter)
      prevNode.next = newNode
      currNode = currNode.next
    }
  }

  count() {
    this.wordCount++;
    return this.wordCount;
  }

}