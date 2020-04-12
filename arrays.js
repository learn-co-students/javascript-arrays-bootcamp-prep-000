var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//add element to the beginning of array

function addElementToBeginningOfArray(array, element){
  var arr = array;
  var new_arr = [...element.split(","), arr];
  return new_arr;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

//add element to the end of array

function addElementToEndOfArray(array, element){
  //[array, ...element];
  var arr = array;
  return [arr, ...element.split(",")];
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
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var new_array = array.slice(1);
  return new_array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
