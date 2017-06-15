var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var tempArr;

function addElementToBeginningOfArray(arr, element) {
  tempArr = [element, ...arr];
  return tempArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element) {
  tempArr = [...arr, element];
  return tempArr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
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
  tempArr = arr.slice(1);
  return tempArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  tempArr = arr.slice(0, arr.length - 1);
  return tempArr;
}
