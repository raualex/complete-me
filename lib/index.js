const Node = require('../lib/node.js');

module.exports = class Trie {
  constructor() {
    this.wordCount = 0;
    this.root = new Node();
  }

  populate(dictionary) {
    dictionary.forEach((word) => {
      this.insert(word);
    });
  }

  insert(str) {
    let currNode = this.root;
    let lettersArray = [...str];
    this.deconstructWord(lettersArray, currNode, str);
    this.count();
  }

  deconstructWord(lettersArray, currNode, str) {
    
    if (!lettersArray.length) {
      currNode.end = true;
      currNode.finalWord = str;
      return;
    }

    if (currNode.children[lettersArray[0]]) {
      currNode = currNode.children[lettersArray.shift()];
    } else {
      currNode.children[lettersArray[0]] = new Node();
      currNode = currNode.children[lettersArray.shift()];
    }
    
    return this.deconstructWord(lettersArray, currNode, str);
  }

  count() {
    this.wordCount++;
    return this.wordCount;
  }

  suggest(input) {
    let inputArray = [...input];
    let currNode = this.root;
    let finalArray = [];
    
    while (inputArray.length) {
      if (currNode.children[inputArray[0]]) {
        currNode = currNode.children[inputArray.shift()];
      } else {
        return 'Sorry, no suggestions available';
      }
    }

    this.lookForWordEnd(currNode, finalArray);

    return finalArray;
  }    

  lookForWordEnd(currNode,finalArray) {
    

    if (Object.keys(currNode.children).length > 1) {
      let keysArray = Object.keys(currNode.children);
      let checkpoint = currNode;
      keysArray.forEach((key) => {
        currNode = checkpoint;
        currNode = currNode.children[key];
        this.lookForWordEnd(currNode, finalArray);
      });
    } else {
      if (!currNode.end) {
        let key = Object.keys(currNode.children);
        currNode = currNode.children[key];
        return this.lookForWordEnd(currNode, finalArray);
      } else {
        finalArray.push(currNode.finalWord);
        currNode.end = !currNode.end;
        let key = Object.keys(currNode.children);
        if (key.length >= 1) {
          this.lookForWordEnd(currNode, finalArray);
        }
        currNode.end = !currNode.end;
      }
    }
  }  
};