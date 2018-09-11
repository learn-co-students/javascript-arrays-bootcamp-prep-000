var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = []
function addElementToBeginningOfArray(array, element) {
  var thing = [element, ...array]
  return thing
}
function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array;
}
function addElementToEndOfArray(array, element) {
  var thing1 = [ ...array, element]
  return thing1
}
function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
   return array;
}
function accessElementInArray(array, index) {
  var num = array[index];
  return num
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  var thing3 = array.slice(1)
  return thing3
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  var thing4 = array.slice(0, array.length - 1)
  return thing4
}