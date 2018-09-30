var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(array, element) {
array = [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  array = [array,...element];
  array;
}

function destrctivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}

function accessElementInArray(array, index) {
  console.log(array, index);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  array;
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length -1);
  array;
}
