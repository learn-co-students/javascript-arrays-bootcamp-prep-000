/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

var grilledCheeseIngridents = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic' ]
var tomatoSauceIngridents = ['tomato', 'garlic', 'olive oil', 'basil', 'oreagno']
var myArray = ['element 0', 'element 1', 'element 2, ..., elementN'];

var primeNumbers = ['2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37'];
 
var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];
 
var weirdGreeting = [ "he", '110', "w", '0', "r", '1', "d" ];

var superheroines = ["catwoman", "she-hulk", "mystique"];
 
superheroines.push("wonder woman");

var chocolateBars = 
  ["hundred grand", "kitkat", "skittles", "snickers"];
  function() addElementToBeginningOfArray {
    it ('add the element to the beginning of array');
    'returns("the whole array");'
  }
function() destructivelyAddElementToBeginningOfArray {
  it ('add the elementto  to the beginning of array, alters the original array')
 'returns(the new array and not modifiy the original);'
}
function() addElementToEndOfArray {
  it ('takes two arguments, an array and an element to add to the end of the array, without altering the original');
  'returns (without altering the original array);'
}
function() accessElementInArray {
  it ('accepts an array and an index') 
  returns('the element at that index');
}
function() destructivelyRemoveElementFromBeginningOfArray {
  it ('takes an array as an argument and removes the first element');
  'returns(the entire array and mutates the array);'
}
function() removeElementFromBeginningOfArray {
  it ('takes an array as the only argument and removes the first element');
  'returns(the entire array and should not mutate underlying array);'
}
function() destructivelyRemoveElementFromEndOfArray {
  it ('takes an array as its only argument and removes the last element');
  'returns(the entire array, and mutate the array);'
}
function() removeElementFromEndOfArray {
  it ('takes an array as its only argument and removes the last elementy')
  'returns(the array without the last element and should not mutate the original array);'
}

}

}
var cities = ["New York", "San Fransisco", "...cities", "Philidelphia"]
 
var empty = [];


describe('arrays', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
  })

  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql["hundred grand", "kitkat", "skittles", "snickerslearn"]
    })
  })

  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })

  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })

  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })

  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  
  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the array with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the array', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];

      removeElementFromBeginningOfArray(array);

      expect(array).to.eql([1, 2, 3]);
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})