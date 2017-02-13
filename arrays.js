const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

function('arrays') {
  jsdom({src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
 })
}

function('chocolateBars') {
 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars // ["snickers", "hundred grand", "kitkat", "skittles"]
}

function('addElementToBeginningOfArray(array, element)') {
  array.unshift('foo');
    addElementToBeginningOfArray([1], 'foo') // ['foo', 1]
}

['foo', ...array] = ['foo', array];
  const array = [1];
    addElementToBeginningOfArray(array, 'foo');
      array // array

function('destructivelyAddElementToBeginningOfArray(array, element)') {
  array.unshift('foo');
    destructivelyAddElementToBeginningOfArray([1], 'foo') // ['foo', 1]
}

['foo', ...array] = ['foo', array];
  const array = [1];
    destructivelyAddElementToBeginningOfArray(array, 'foo');
      array // ['foo', 1]

function('addElementToEndOfArray(array, element)') {
  push.array('foo');
    addElementToEndOfArray([1], 'foo') // [1, 'foo']
}

[...array, 'foo'] = [array, 'foo'];
  const array = [1];
    addElementToEndOfArray(array, 'foo');
      array // array

function('destructivelyAddElementToEndOfArray(array, element)') {
  push.array('foo');
   destructivelyAddElementToEndOfArray([1], 'foo') // [1, 'foo']
}

[...array, 'foo'] = [array, 'foo'];
  const array = [1];
   destructivelyAddElementToEndOfArray(array, 'foo');
    array // [1, 'foo']

function('accessElementInArray(array, index)') {
  Object.keys([1, 2, ,3]);
    accessElementInArray([1, 2, 3], 2) // 3
  }

function('removeElementFromBeginningOfArray(array)') {
  array.shift(1);
    removeElementFromBeginningOfArray([1, 2, 3]) // [2, 3]
}

function('removeElementFromEndOfArray(array)') {
  array.pop(3);
    removeElementFromEndOfArray([1, 2, 3]) // [1, 2]
}




}
