var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(a,b) {
  return a[b]
}
function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return a
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop(1)
  return a
}
function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1)
  return a
}