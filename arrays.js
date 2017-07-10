function addElementToBeginningOfArray(arr, item) {
  return [item, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item);
  return arr;
}

function addElementToEndOfArray(arr, item) {
  return [...arr, item];
}

function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item);
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
  var newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var newArr = arr.slice(0, arr.length - 1);
  return newArr;
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
