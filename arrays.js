var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array = [ 'foo', ...array]
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
  console.log(array[2]);
  return (array[2])
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length -1)
  return array
  return (array[3])
}