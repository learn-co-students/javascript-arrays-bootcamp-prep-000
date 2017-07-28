
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

// This function takes two parameters:
// 1) an array, 2) an element to add to the beginning of the array.
// This function does not alter the original array that's passed in,
// but rather return a new array and not modify the original.
// When used in an array, the spread operator (...) creates a new array
// in place, rather than modifying the original one.

function addElementToBeginningOfArray(array, element){
  var addToArray = [element, ...array]
  return addToArray
}

// This function takes two parameters:
// 1) an array, 2) an element to add to the beginning of the array.
// This function alters/changes the original array that's passed in.
// The push (pushes elements onto end of array) and unshift (adds element to
// front of array) methods change/mutate the underlying array.

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var addToArray = [...array, element]
  return addToArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

// The slice method takes a slice from its array. The first argument specifies
// where the slice starts, and the second argument specifies where it ends.
// If there is no second argument, the slice goes from the first argument
// (the start) to the end of the array.

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
