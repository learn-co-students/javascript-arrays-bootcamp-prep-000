var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  var newArray = array;
  return newArray;
}

function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  var newDestruct = array;
  return newDestruct;
}

function accessElementInArray(array, index){
  array = array[index];
  return array;
}

function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}