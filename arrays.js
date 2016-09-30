var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
]

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
