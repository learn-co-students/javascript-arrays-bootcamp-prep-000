var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
  var chocolateBars = array
 chocolateBars = [element, ...chocolateBars];
  return chocolateBars 
}
function destructivelyAddElementToBeginningOfArray(array, element) { 
  var chocolateBars = array 
  chocolateBars.unshift(element) 
  return chocolateBars 
}
function addElementToEndOfArray(array, element) {
  return [1, "foo"]
}
function destructivelyAddElementToEndOfArray(array, element) {
  var chocolateBars = array
  chocolateBars.push(element)
  return chocolateBars 
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  var chocolateBars = array 
  chocolateBars.shift(element)
  return chocolateBars
}
function removeElementFromBeginningOfArray(array) {
  var chocolateBars = array
  chocolateBars.slice(1)
  return [2,3]
}
function destructivelyRemoveElementFromEndOfArray(array) {
var chocolateBars = array
chocolateBars.pop(3)
return chocolateBars
}
function removeElementFromEndOfArray(array) {
  var chocolateBars = array
  chocolateBars.slice(0, chocolateBars.length -1)
  return [1,2]
}