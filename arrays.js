var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//add element to the beginning of array

function addElementToBeginningOfArray(array, element){
  var new_array = [...element, array];
  return new_array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

//add element to the end of array

function addElementToEndOfArray(array, element){
  var new_array = [array, ...element];
  return new_array;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

//accessing elements

function accessElementInArray(array, index){
  return array[index];
}

//Removing Elements from arrays

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
