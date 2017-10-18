var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var resultArray = [element, ...array];
  return resultArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var resultArray = [...array, element];
  return resultArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var resultArray = array.shift();
  return resultArray;
}

function removeElementFromBeginningOfArray(array){
  var resultArray = array.slice(0, 1)
  return resultArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var resultArray = array.slice(-1);
  return resultArray;
}
