var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array = [ 'foo', ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift('foo')
  return array
}