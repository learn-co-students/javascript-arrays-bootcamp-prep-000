var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
  var array
  array.unshift(element)
  return array
  array1 = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array
  array.push(element)
  return array
  array1 = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array
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
