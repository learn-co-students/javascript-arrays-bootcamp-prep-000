//Array chocolareBars
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// Function adds elements to the start of an array by creating a new array
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}
// Function adds element to beginning of the existing array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

// Function adds an element to the end of an array by creating a new array
function addElementToEndOfArray(array, element){
  var newArray = [...array, element]
  return newArray
}
// Function adds an element to the end of the existing array
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
// Access an element at the Index in the array
function accessElementInArray(array, index){
  var element = array[index]
  return element
}
// remove an element from the beginning of the existing array
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
// remove an element from the beginning of a new array
function removeElementFromBeginningOfArray(array){
  var newArray = array
  newArray.shift()
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  var newArray = array
  newArray.pop()
  return newArray
}
