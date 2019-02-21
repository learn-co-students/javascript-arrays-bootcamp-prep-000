var ingredient1 = "bread"
var ingredient2 = " mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, n) {
  return [n, ... array]
}

function destructivelyAddElementToBeginningOfArray(array, n) {
  array.unshift(n);
  return array;
}

function addElementToEndOfArray(array, n) {
  return [...array, n]
}

function destructivelyAddelementToEndOfArray(array, n) {
  return array.push(n)
  return array
}

function accessElementInArray(array, n) {
  array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  return array
}