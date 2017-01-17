var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(arr, n) {
  var newArray = [n, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, n) {
  arr.unshift(n);
  return arr;
}

function addElementToEndOfArray(arr, n) {
  var newArray = [...arr, n];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, n) {
  arr.push(n);
  return arr;
}

function accessElementInArray(arr, n) {
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var newslice = arr.slice(1);
  return newslice;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
