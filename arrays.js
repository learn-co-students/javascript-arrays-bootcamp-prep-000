chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array_1, element_1){
  var newArray_1 = [element_1,...array_1];
  return newArray_1;
}
function destructivelyAddElementToBeginningOfArray(array_1, element_1){
  array_1.unshift(element_1);
  return array_1;
}
function addElementToEndOfArray(array_1, element_1){
var newArray_1 = [...array_1, element_1];
return newArray_1;
}
function destructivelyAddElementToEndOfArray(array_1, element_1){
  array_1.push(element_1);
  return array_1;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
