var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function accessElementInArray(array, index) {
  return array[index]
}

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array2 = array
  array2.shift()
  return array2
}

function removeElementFromEndOfArray(array) {
  var array2 = array
  array2.pop()
  return array2
}
