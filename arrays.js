var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  var newArray = [el, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el) {
  var newArray = [...arr, el];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, el) {
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
  var newArray = arr.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1);
}







