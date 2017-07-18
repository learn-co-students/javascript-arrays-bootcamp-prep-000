var chocolateBars = ["snickers", "hunred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elem) {
  return arr = [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  return (arr.unshift(elem));
}

function addElementToEndOfArray(arr, elem) {
  return arr = [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  return (arr.push(elem));
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return (arr.shift());
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return (arr.pop());
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
