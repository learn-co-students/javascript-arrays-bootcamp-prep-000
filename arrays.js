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

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  const newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
} 

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.unshift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
/*
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.unshift
}
 */
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

console.log("Starting my JAVASCRIPT ARRAYS Lab.") // DOES NOT DISPLAY

// addElementToBeginningOfArray(chocolateBars, 'Dark Chocolate')

// destructivelyAddElementToBeginningOfArray(chocolateBars, 'Dark Chocolate')

// addElementToEndOfArray(chocolateBars, "Dark Chocolate")

// destructivelyAddElementToEndOfArray(chocolateBars, "Dark Chocolate")

// accessElementInArray(chocolateBars, 0)

// destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

// removeElementFromBeginningOfArrayy(chocolateBars)

// destructivelyRemoveElementFromEndOfArray(chocolateBars)

// removeElementFromEndOfArray(chocolateBars)

console.log('Finished my JAVASCRIPT ARRAYS Lab.') // DOES NOT DISPLAY

// End my arrays.js