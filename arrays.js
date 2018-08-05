// My arrays.js
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
 
function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array]
  return newArray
}
/*
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
 */ 

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
//  return array.push(element)
  return [...array, element]
}
/*
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.unshift()
}

function removeElementFromBeginningOfArray(array) {
  return array.unshift()
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array //  returns the array with the last element removed:
}

function removeElementFromEndOfArray(array) {
  return array
}
 */
console.log("Starting my JAVASCRIPT ARRAYS Lab.") // DOES NOT DISPLAY

addElementToBeginningOfArray(chocolateBars, 'Dark Chocolate')

destructivelyAddElementToBeginningOfArray(chocolateBars, 'Dark Chocolate')
/*
addElementToEndOfArray(chocolateBars, "Dark Chocolate")

destructivelyAddElementToEndOfArray(chocolateBars, "Dark Chocolate")

accessElementInArray(chocolateBars, 0)

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

removeElementFromBeginningOfArrayy(chocolateBars)

destructivelyRemoveElementFromEndOfArray(chocolateBars)

removeElementFromEndOfArray(chocolateBars)
 */
console.log('Finished my JAVASCRIPT ARRAYS Lab.') // DOES NOT DISPLAY

// End my arrays.js