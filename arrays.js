var chocolateBars = ['snickers','hundred grand','kitkat','skittles']


function addElementToBeginningOfArray (array,element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray (array,element) {
  return array.unshift(element)
}
function addElementToEndOfArray (array,element) {
  return [...array,element]
}
function destructivelyAddElementToBeginningOfArray (array,element) {
  return array.push(element)
}
function accessElementInArray (array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array
}
function removeElementFromBeginningOfArray (array){
  var newArray = array.slice(1);
  return newArray
}
function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array
}
function removeElementFromEndOfArray (array){
  var newArray = array.slice(0,array.length() - 1);
  return newArray
}
