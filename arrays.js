
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array
var addition
var index
function addElementToBeginningOfArray(array, addition) {
  var temp = [addition,...array]
return temp
}
function destructivelyAddElementToBeginningOfArray(array, addition) {
  array.unshift(addition)
  return array
}
function addElementToEndOfArray(array, addition) {
  var temp = [...array, addition]
  return temp
}
function destructivelyAddElementToEndOfArray(array, addition) {
  array.push(addition)
  return array
}
function accessElementInArray(array, index) {
 return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray( array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, 2)
  return array
}