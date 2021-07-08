var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}
function addElementToEndOfArray(array, element){
  array = [...array, element];
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array;
}
function accessElementInArray(A, B){
  return A[B];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(){
  return array.pop();
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
