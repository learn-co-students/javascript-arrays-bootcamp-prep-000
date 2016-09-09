function addElementToBeginningOfArray(array,element){
var newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

var chocolateBars = ["sinckers", "hundred grand", "kitkat", "skittles"];
function addElementToEndOfArray(array,element){
var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element){
var len = array.length
 array[len] = element;
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop();
    return array;
}
