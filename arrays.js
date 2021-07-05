var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
chocolateBars

function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  newArray = [...array, element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
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
  newArray = array.slice(0, array.length-1);
  return newArray;
}
