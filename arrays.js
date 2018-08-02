var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  array = ['foo', ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, 'foo']
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo')
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
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}