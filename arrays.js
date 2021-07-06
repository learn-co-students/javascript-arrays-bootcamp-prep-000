var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToBeginningOfArray(array, element) {
  var newadd = [element,...array]
  return newadd
}
function addElementToEndOfArray(array, element) {
  var newend = [...array, element]
  return newend
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array) {
  var remove = array.slice(1)
  return remove
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
 var remove2 = array.slice(0, array.length - 1)
 return remove2
}
