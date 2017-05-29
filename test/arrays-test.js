/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('arrays', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
  })

  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })

  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an `element` to the beginning of an `array`', () => {
      const array = [1]
      expect(addElementToBeginningOfArray(array, 'foo')).to.eql(['foo', 1])
      expect(array).to.eql([1])

})

    it('does not alter `array`', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(array)
    })
  })

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

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in `array` at the given `index`', () => {
/// here the [123], is the array and the 2 is the index of where you access the last digit in the array.  0=1 1=2 2=3 in the array sequence.
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })

  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{/// here (array) = 1,2,3 so no need to use the element array terms in the last few tests..
    ///here down
    it('returns the `array` with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    }) ///  destructively and .shift / e.g. array.shift mutates/alters the array. eg. 1,2,3 = 2,3   /// 1 is the element in the beg. of the array.

    it('did not make a copy of the array when removing the first element', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the `array`', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
  })

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

  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the `array`', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
  })
})
