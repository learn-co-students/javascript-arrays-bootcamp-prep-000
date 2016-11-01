// var myArray = [element0, element1, ..., elementN];
// OR var evenNumbers = new Array();

// In arrays.js, define a variable called chocolateBars.
// Its value should be an array of the strings snickers, hundred grand, kitkat, and skittles.
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// 1) add the element to the beginning of the array
// 2) return the whole array

// should return a new array and not modify the original
function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// should alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
 return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}
