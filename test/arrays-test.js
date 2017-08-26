/*global describe, it */
var arrays = require("../arrays.js")
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
    expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })
it('does not alter `array`', () => {
   const array = [1]
addElementToBeginningOfArray(array, 'foo')
expect(array).to.eql([1])
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


})
