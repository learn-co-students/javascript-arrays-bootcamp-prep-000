
var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var foo = [element, ...array]
  return foo
  }
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var foo = [...array, element]
  return foo
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
}
function removeElementFromBeginningOfArray(array) {
  var foo = array.slice(1)
  return foo
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  var foo = array.slice(0,array.length -1)
  return foo
}
