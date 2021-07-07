var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  var redo = [ele, ...arr];
  return redo;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray(arr, ele) {
  var rebuild = [...arr, ele];
  return rebuild;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var newly = arr.slice(1);
  return newly;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var shorten = arr.slice(0, arr.length - 1);
  return shorten;
}