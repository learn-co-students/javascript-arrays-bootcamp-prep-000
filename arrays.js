var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}

function accessElementInArray(array, index) {
  return index
}
