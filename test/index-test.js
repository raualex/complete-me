
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
  it ('should take a string as a parameter', function() {
    
    trie.insert('word');

    assert.isNotNull(trie.head)
  });
 })

 describe('count', function() {
  it ('should be able to count the words inserted in', function() {
    
    assert.equal(trie.wordCount, 0)
    trie.insert('word');

    assert.equal(trie.wordCount, 1)
  })
 })
 