var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

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

function destructivelyRemoveElementFromBeginningOfArray(arr, n) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
