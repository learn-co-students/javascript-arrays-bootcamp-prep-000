var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(theArray, theElement) {
  var newArray = theArray;
  newArray.unshift(theElement);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(theArray, theElement) {
  theArray.unshift(theElement);
  return theArray;
}

function addElementToEndOfArray (theArray, theElement) {
  var newArray = theArray;
  newArray.push(theElement);
  return newArray;
}

function destructivelyAddElementToEndOfArray (theArray, theElement) {
  theArray.push(theElement);
  return theArray;
}

function accessElementInArray (theArray, index) {
  return theArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray (theArray) {
  theArray.shift()
  return theArray
}

function removeElementFromBeginningOfArray(theArray) {
  var newArray = theArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(theArray) {
  theArray.pop();
  return theArray;
}

function removeElementFromEndOfArray(theArray) {
  var newArray = theArray.slice(0,theArray.length - 1)
  return newArray
}