// My arrays.js
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
 
function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift = [element]
  return array
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}
  
function destructivelyAddElementToEndOfArray(arrayy, element) {
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}
/*
 */
console.log("Starting my JAVASCRIPT ARRAYS Lab.") // DOES NOT DISPLAY
addElementToBeginningOfArray(chocolateBars, 'Dark Chocolate')
console.log(chocolateBars)
destructivelyAddElementToBeginningOfArray(chocolateBars, "Dark Chocolate")
console.log(chocolateBars)
console.log('Finished my JAVASCRIPT ARRAYS Lab.') // DOES NOT DISPLAY
// End my arrays.js