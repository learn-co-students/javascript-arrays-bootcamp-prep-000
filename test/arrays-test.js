/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('arrays', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
  })
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array];
  }
  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1],'foo')).to.eql(['foo', 1])
    })

    it('does not alter the original array', () => {
      const array = [1]
      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })
  function destructivelyAddElementToBeginningOfArray (array, element) {
    array.unshift(element);
    return array
  }
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
  function addElementToEndOfArray(array, element) {
    return [...array, element]
  }
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
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
  }
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
  function accessElementInArray(array, index){
    return array[index]
  }
  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift()
    return array
  }
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
  function removeElementFromBeginningOfArray(array){
    return array.slice(1)
  }

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
  function destructivelyRemoveElementFromEndOfArray(array){
    array.pop()
    return array
  }
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
  function removeElementFromEndOfArray(array){
    return array.slice(0, array.length - 1)
  }
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
