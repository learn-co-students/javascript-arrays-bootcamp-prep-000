var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
  [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
function addElementToEndOfArray(array, element) {
  [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}
function accessElementInArray(array, element) {
  console.log(array[element])
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element)
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
}
