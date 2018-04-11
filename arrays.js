var chocolateBars = 
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, elementToAdd) {
  return [elementToAdd, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
  array.unshift(elementToAdd)
  return array
}

function addElementToEndOfArray(array, elementToAdd) {
  return [...array, elementToAdd]
}

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  array.push(elementToAdd)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  new_array = array.slice(1)
  return new_array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  new_arr = array.slice(0, array.length - 1)
  return new_arr
}