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
  var rmdElement = array.shift();
  return rmdElement;
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  newArray = array.pop();
  return newArray;
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length - 1);
  return newArray;
}
