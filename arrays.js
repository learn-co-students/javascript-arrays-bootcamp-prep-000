var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  arr = [element, ...arr];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element) {
  arr = [...arr, element];
  return arr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  arr = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  arr = arr.slice(0, arr.length - 1);
  return arr;
}
