var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

const array = [1, 2, 3, 4, 5]

function addElementToBeginningOfArray(array,'foo') {
  ['foo', ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array,'foo') {
  array.unshift('foo')
  return array
}

function addElementToEndOfArray(array,'foo') {
  [...array, 'foo']
  return array
}

function destructivelyAddElementToEndOfArray(array,'foo') {
  array.push('foo')
  return array
}

function accessElementInArray(array,[0]) {
  return array[0]
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
