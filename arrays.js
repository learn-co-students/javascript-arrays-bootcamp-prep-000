var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element){
  var endArray = [...array, element];
  return endArray;
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
  var slicedArray = array.slice(1);
  return slicedArray;
}

function removeElementFromEndOfArray(array){
  var updatedArray = array.slice(0, -1);
  return updatedArray;
}


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}