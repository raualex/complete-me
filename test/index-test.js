
const { assert } = require('chai');
const Trie = require('../lib/index.js');
let trie;

beforeEach(() => {
  trie = new Trie
});

 describe('test', function() {
   it('should return true', function() {
     assert.equal(true, true);
   });
 })

 describe('insert', function() {
  it('should take a string as a parameter', function() {
    
    trie.insert('word');

    assert.isNotNull(trie.head)
  });

  it.skip('should be able to add a node to the trie', function() {
    
    trie.insert('hello')

    assert.equal(trie.root.data, 'h')
  });

  it.skip('should add children to the beginning node', function() {

    trie.insert('bleistift')
    let firstNode = trie.head.children
   
    assert.equal(firstNode[0].data, 'l')
  })

 })

 describe('count', function() {
  it('should be able to count the words inserted in', function() {
    
    assert.equal(trie.wordCount, 0)
    trie.insert('word');

    assert.equal(trie.wordCount, 1)

    trie.insert('wonder')

    assert.equal(trie.wordCount, 2)
    // console.log(JSON.stringify(trie.root, null, 4))

    trie.suggest('wo')
  })
 })
 