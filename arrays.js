var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = [];
  newArray = array;
  newArray.unshift(element);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [];
  newArray = array;
  newArray.push(element);
  return newArray;
}
function destructivelyAddElementToEndOfArray(array,element){
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
  var newArray = [];
  newArray = array.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  var newArray = [];
  newArray = array;
  newArray.pop()
  return newArray;
}

