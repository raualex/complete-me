
const { assert } = require('chai');
const Trie = require('../lib/index.js');
const data = require('../lib/citydata.js');
let trie;


const fs = require('fs');

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

const prefixTrie = new Trie();

prefixTrie.populate(dictionary);


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

    assert.notEqual(trie.root.children, {})
  });

  it('should be able to add a node to the trie', function() {
    
    trie.insert('hello')

    assert.deepEqual(Object.keys(trie.root.children), ['h'])
  });

  it('should add multiple children to the root node', function() {

    trie.insert('bleistift')
    trie.insert('stilo')
    let firstNode = trie.root

    assert.deepEqual(Object.keys(firstNode.children), ['b','s'])
  })

 })

 describe('suggest', function() {
  it('should be able to give suggestions based off of words in trie', function() {
    trie.insert('newt')
    trie.insert('newer')

    assert.deepEqual(trie.suggest('new'), ['newt', 'newer'])
  })
 })

 describe('count', function() {
  it('should be able to count the words inserted in', function() {
    
    assert.equal(trie.wordCount, 0)
    trie.insert('word');

    assert.equal(trie.wordCount, 1)

    trie.insert('wonder')

    assert.equal(trie.wordCount, 2)
  })
 })

 describe('populate', function() {
  it('should be able to take the whole dictionary via the populate method', function() {
    
    assert.equal(trie.wordCount, 0)
    
    trie.populate(dictionary)
    
    assert.equal(trie.wordCount, 235886)
  })

  it('should be able to take the city data via the populate method', function() {

    assert.equal(trie.wordCount, 0)
    
    trie.populate(data.data)
    
    assert.equal(trie.wordCount, 1000)

    console.log(trie.suggest('new'))
  })
 })
 