var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element){
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo")
  return array
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo")
  return array
}
function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array, element) {
  var array = [1, 2, 3]
  return array.slice(0, array.length - 1)
}
