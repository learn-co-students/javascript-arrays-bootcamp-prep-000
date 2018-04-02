var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray = array;
  var myNewArray = [element, ...array];
  return myNewArray;
}

function addElementToEndOfArray(array, element) {
  var myArray = array;
  var myNewArray = [...array, element];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = array;
  myArray.unshift(element);
  return myArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var myArray = array;
  myArray.push(element);
  return myArray;
}

function accessElementInArray(array, index) {
  var myArray = array;
  return myArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var myArray = array;
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(array) {
  var myArray = array;
  myArray = myArray.slice(1);
  return myArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var myArray = array;
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(array) {
  var myArray = array;
  myArray = myArray.slice(0, array.length - 1);
  return myArray;
}