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
// still fails
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift = [element]
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return newArray
}
  
function destructivelyAddElementToEndOfArray(array, element) {
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

addElementToEndOfArray(chocolateBars, "Dark Chocolate")

destructivelyAddElementToEndOfArray(chocolateBars, "Dark Chocolate")

accessElementInArray(chocolateBars, 0)

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

console.log('Finished my JAVASCRIPT ARRAYS Lab.') // DOES NOT DISPLAY
// End my arrays.js