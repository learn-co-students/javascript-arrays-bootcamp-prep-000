// Problem 1 
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
console.log(chocolateBars)

// Problem 2 
function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array]
  return newarray
}

// Problem 3 
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

//Problem 4 
function addElementToEndOfArray(array, element) {
  var newarray = [...array, element]
  return newarray
}

//Problem 5
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

//Problem 5 
function accessElementInArray(array, index) {
  return array[index]
}

//Problem 6 
function destructivelyRemoveElementFromBeginningOfArray(array, index) {
  array.shift(index)
  return array
}

//Problem 7
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

//Problem 8
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

//Problem 8 
function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length -1)
}