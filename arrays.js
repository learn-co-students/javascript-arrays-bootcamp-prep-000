function addElementToBeginningOfArray(arr, elem) {
  return [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, (array.length - 1));
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function chocolateBars() {
  const array = ["snickers", "hundred grand", "kitkat", "skittles"];
}
