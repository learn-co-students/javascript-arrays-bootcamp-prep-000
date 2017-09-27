var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr,element0) {
  return [element0,...arr];
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element];
}

function destructivelyAddElementToBeginningOfArray(arr,element0) {
  arr.unshift(element0);
  return arr;
}

function accessElementInArray(arr,n) {
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0,arr.length-1);
}

function destructivelyAddElementToEndOfArray(arr,elem) {
  arr.push(elem);
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}
