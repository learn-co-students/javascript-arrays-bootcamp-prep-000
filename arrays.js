var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, e) {
  arr.unshift(e); return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, e) {
  arr.unshift(e); return arr;
}

function addElementToEndOfArray(arr, e) {
  arr.push(e); return arr;
}

function destructivelyAddElementToEndOfArray(arr, e) {
  arr[arr.length] = e; return arr;
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
