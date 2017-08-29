var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']

function addElementToBeginningOfArray(array, element) {
  return ['foo', ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, 'foo']
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
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
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
