var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(arr, element) {
  var newArray = [element, ...arr]

  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);

  return array;
}

function addElementToEndOfArray(arr, element) {
  var newArray = [...arr, element];

  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);

  return array;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();

  return arr;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();

  return arr;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)

  return array;
}
