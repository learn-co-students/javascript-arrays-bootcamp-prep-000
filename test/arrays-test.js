/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('arrays', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
  })

//test 1
  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })

//Test 2
  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an `element` to the beginning of an `array`', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter `array`', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(array)
    })
  })

//Test 3
  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an `element` to the beginning of an `array`', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters `array`', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })

//test 4
  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an `element` to the end of an `array`', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter `array`', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql(array)
    })
  })

// Test 5
  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an `element` to the end of an `array`', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters `array`', () => {
      const array = [1]

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })

//Test 6
  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in `array` at the given `index`', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })


//Test 7
  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the `array` with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('did not make a copy of the array when removing the first element', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

//Test 8
  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the `array`', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
  })

//Test 9
  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the `array` with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })

    it('did not make a copy of the array when removing the last element', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })

//Tet 10
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the `array`', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
  })
})
