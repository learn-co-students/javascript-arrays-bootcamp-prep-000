var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
var goku = [element, ...array];
  return goku
}
function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift( element)
  return array
}
function addElementToEndOfArray(array, element){
var goku = array;
goku = [...goku, element]
  return goku
}

function destructivelyAddElementToEndOfArray(array, element){
   array.push( element)
  return array
}
function accessElementInArray(array, element){
  return array[element]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
var goku = array.slice(1);
  return goku
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
  return array
}
function removeElementFromEndOfArray(array){
var goku = array.slice(0, array.length - 1);
  return goku
}