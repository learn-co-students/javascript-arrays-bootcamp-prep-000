var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
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
function accessElementInArray(array, element) {
  return array[element]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}
function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}