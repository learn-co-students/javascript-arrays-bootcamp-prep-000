var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(myArray, theAddition) {
  var myNewArray = [theAddition, ...myArray];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, theAddition) {
  myArray.unshift(theAddition);
  return myArray;
}

function addElementToEndOfArray(myArray, theAddition) {
  var myNewArray = [...myArray, theAddition];
  return myNewArray;
}

function destructivelyAddElementToEndOfArray(myArray, theAddition) {
  myArray.push(theAddition);
  return myArray;
}

function accessElementInArray(myArray, theIndex) {
  return myArray[theIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray(myArray) {
  return myArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1);
}