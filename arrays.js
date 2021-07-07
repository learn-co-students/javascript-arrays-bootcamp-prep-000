var chocolateBars = ["snickers", "hundred grand", "skittles", "kitkat"];

function addElementToBeginningOfArray(myElement, myArray) {
  var newArray = [myElement, ...myArray];
}

function destructivelyAddElementToBeginningOfArray(myElement, myArray) {
  return myArray.unshift(myElement);
}

function addElementToEndOfArray(myElement, myArray) {
  var newArray = [...myArray, myElement];
  return newArray;
}

function destructivelyAddElementToEndOfArray(myElement, myArray) {
  return myArray.push(myElement);
}

function accessElementInArray(myElement) {
  
}

function removeElementFromEndOfArray(myArray) {
  var newArray = myArray[-1];
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  return myArray.pop();
}

addElementToBeginningOfArray();
destructivelyAddElementToBeginningOfArray();
accessElementInArray();
removeElementFromEndOfArray();
destructivelyRemoveElementFromEndOfArray();

