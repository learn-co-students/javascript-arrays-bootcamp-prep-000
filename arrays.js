var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  var array = array.slice(1);
  return array;
}

function removeElementFromEndOfArray(array){
  var array = array.slice(0, array.length - 1);
  return array;
}
