var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var mySecondArray = array;
  return [element, ...mySecondArray];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = array;
  myArray.unshift(element);
  return myArray;
}

function addElementToEndOfArray(array, element) {
  var myArray = array;
  return [...myArray, element]
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
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray(array) {
  var myArray = array;
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var myArray = array;
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(array) {
  var myArray = array;
  return myArray.slice(0, myArray.length - 1);
}

console.log(removeElementFromEndOfArray([1,2,3]))