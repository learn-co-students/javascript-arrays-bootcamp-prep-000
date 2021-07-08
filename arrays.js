var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  var copy = [...arr];
  copy.unshift(el);
  return copy;
}
 

var destructivelyAddElementToBeginningOfArray = (arr, el) => {
  arr.unshift(el);
  return arr;
}

var addElementToEndOfArray = (arr, el) => {
  var copy = [...arr];
  copy.push(el);
  return copy;
}

var destructivelyAddElementToEndOfArray = (arr, el) => {
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var copy = [...arr];
  copy.shift();
  return copy;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var copy = [...arr]
  copy.pop();
  return copy;
}