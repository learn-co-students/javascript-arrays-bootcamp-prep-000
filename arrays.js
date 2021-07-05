var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var firstToDo = [1];

function addElementToBeginningOfArray(array, element) {
  var newFirstToDo = [element, ...array]
  return newFirstToDo
}
addElementToBeginningOfArray(firstToDo, 'foo');

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newSecondToDo = [...array, element];
  return newSecondToDo
}
addElementToEndOfArray(firstToDo, 'foo');

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(firstToDo, 'foo');

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

var whole = [1, 2, 3]

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
removeElementFromBeginningOfArray(whole);

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}
removeElementFromEndOfArray(whole);
