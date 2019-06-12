var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arrayIn, element) {
  var newArray = arrayIn.slice();
  newArray.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (arrayIn, element) {
  var newArray = arrayIn;
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray (arrayIn, element) {
  var newArray = arrayIn.slice();
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray (arrayIn, element) {
  var newArray = arrayIn;
  newArray.push(element);
  return newArray;
}

function accessElementInArray(arrayIn, index) {
  return arrayIn[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arrayIn) {
  var newArray = arrayIn;
  newArray.shift();
  return newArray;  
}

function removeElementFromBeginningOfArray (arrayIn) {
  var newArray = arrayIn.slice();
  newArray = newArray.slice(1)
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray (arrayIn) {
  var newArray = arrayIn;
  newArray.pop();
  return newArray;  
}

function removeElementFromEndOfArray (arrayIn) {
  var newArray = arrayIn.slice();
  newArray.pop();
  return newArray;  
}

