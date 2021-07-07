var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  var newArr = [el, ...arr];

  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el) {
  var newArr = [...arr, el];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
