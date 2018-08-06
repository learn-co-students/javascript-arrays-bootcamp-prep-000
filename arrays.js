// My arrays.js
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]

const chocolateBarsOriginal = new array (chocolateBars)

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
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
  array = array.slice(0, array.length - 1)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

// NO DISPLAY FROM ANY console.log

console.log("Starting my JAVASCRIPT ARRAYS Lab.") 

console.log(chocolateBars)
console.log(chocolateBarsOriginal)

console.log(addElementToBeginningOfArray(chocolateBars, "Dark Chocolate"))

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "Dark Chocolate"))

console.log(addElementToEndOfArray(chocolateBars, "Dark Chocolate"))

console.log(destructivelyAddElementToEndOfArray(chocolateBars, "Dark Chocolate"))

console.log(accessElementInArray(chocolateBars, 0))

console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars))

console.log(removeElementFromBeginningOfArrayy(chocolateBars))

console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars))

console.log(removeElementFromEndOfArray(chocolateBars))

console.log('Finished my JAVASCRIPT ARRAYS Lab.') 

// End my arrays.js