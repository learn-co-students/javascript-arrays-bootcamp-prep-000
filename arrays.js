var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  //var bars = ['bounty', ...chocolateBars]
   var newBar = 'bounty';
  //  var bars = [newBar, ...chocolateBars];
  addElementToBeginningOfArray(chocolateBars, newBar);

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return  newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  //another way
  //var newName = array[index];
  //return newName;
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
