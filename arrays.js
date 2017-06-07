var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];
function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element)
}
function addElementToEndOfArray (array, elemenet) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element)
}
function accessElementInArray (array[index]) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift()
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray (array) {
  array.slice(0, array.length - 1)
}
