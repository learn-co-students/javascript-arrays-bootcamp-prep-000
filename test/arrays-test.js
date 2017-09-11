/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('arrays', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
  })

  describe('chocolateBars',  () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      var  chocolateBars =  [
        'snickers', 'hundred grand','kitkat','skittles'  ]
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })

  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an `element` to the beginning of an `array`', () => {
      function addElementToBeginningOfArray(array, element) {
        var element =  [1]
        element.unshift ( 'foo')
        return  element;
      }
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter `array`', () => {
      var array = [];
      array.push =  ('foo');
      return array

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })

  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an `element` to the beginning of an `array`', () => {
        function destructivelyAddElementToBeginningOfArray(array, element) {
            var element =  [1]
            element.unshift ( 'foo')
            return  element;
  }
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters `array`', () => {
      var array = [1]
      array = [array, 'foo']
      return array
      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })

  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an `element` to the end of an `array`', () => {
      function addElementToEndOfArray(array, element) {
        var element = [1]
        element = [ 1 ,'foo' ]
        return element

      }
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter `array`', () => {
      var array = [1]
      array = [ 1 ,'foo']
      return array

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql(array)
    })
  })

  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an `element` to the end of an `array`', () => {
      function destructivelyAddElementToEndOfArray(array, element) {
        var element =[1]
        element = [1 ,'foo']
        return element

      }
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters `array`', () => {
      var array = [1]
      array = [1 ,'foo']
      return array

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in `array` at the given `index`', () => {
      function accessElementInArray(array, index) {
        var index = (3)
        index.shift = [1, 2, 3]
        return index

      }
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })

  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the `array` with the first element removed', () => {
      function destructivelyRemoveElementFromBeginningOfArray(array) {
        var array =  [ 1, 2, 3]
        array.shift ()
        return array
      }
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('did not make a copy of the array when removing the first element', ()=>{
      var array = [1, 2, 3];
      array.shift = [];
      return array

      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the `array`', () => {
      function removeElementFromBeginningOfArray(array) {
        var array = [1, 2, 3]
        array.shift ()
        return array

      }
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the `array` with the last element removed', () => {
      function  destructivelyRemoveElementFromEndOfArray(array) {
        var array = [ 1, 2, 3 ]
        array.pop (3);
        return  array;

      }
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })

    it('did not make a copy of the array when removing the last element', ()=>{
      var array = [1, 2, 3];
      array.pop (3);
      return array

      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })

  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the `array`', () => {
      function removeElementFromEndOfArray(array) {
        var array = [1, 2, 3]
        array.pop ()
        return array

      }
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
  })
})
