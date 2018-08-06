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
  array = [element, ...array]
  return array
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

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.push
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

console.log("Starting my JAVASCRIPT ARRAYS Lab.") // DOES NOT DISPLAY

console.log(chocolateBars)

console.log(addElementToBeginningOfArray(chocolateBars, "Dark Chocolate"))

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "Dark Chocolate"))

console.log(addElementToEndOfArray(chocolateBars, "Dark Chocolate"))

console.log(destructivelyAddElementToEndOfArray(chocolateBars, "Dark Chocolate"))

console.log(accessElementInArray(chocolateBars, 0))

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

removeElementFromBeginningOfArrayy(chocolateBars)

destructivelyRemoveElementFromEndOfArray(chocolateBars)

removeElementFromEndOfArray(chocolateBars)

console.log('Finished my JAVASCRIPT ARRAYS Lab.') // DOES NOT DISPLAY

// End my arrays.js