// arrays.js - this is a great reference to array behaviour / functions

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

// Adding elements
var addElementToBeginningOfArray = function (a, e) {
  return [e, ...a]
}

var destructivelyAddElementToBeginningOfArray = function (a, e) {
  a.unshift(e)
  return a
}

var addElementToEndOfArray = function (a, e) {
  return [...a, e]
}

var destructivelyAddElementToEndOfArray = function (a, e) {
  a.push(e)
  return a
}

// Accessing elements
var accessElementInArray = function (a, i) {
  return a[i]
}

// Removing elements and returning remaining array
var removeElementFromBeginningOfArray = function (a) {
  return a.slice(1)
}

var removeElementFromEndOfArray = function (a) {
  return a.slice(0,-1)
}

var destructivelyRemoveElementFromBeginningOfArray = function (a) {
  a.shift()
  return a
}

var destructivelyRemoveElementFromEndOfArray = function (a) {
  a.pop()
  return a
}
