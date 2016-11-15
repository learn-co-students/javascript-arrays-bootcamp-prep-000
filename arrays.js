var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = array.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, element){
  return array[element];
}

function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function removeElementFromEndOfArray(array){
  return array.slice(0, -1);
}
