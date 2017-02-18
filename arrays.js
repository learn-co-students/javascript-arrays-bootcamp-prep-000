chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToEndOfArray(arr, e) {
  return [ ...arr, e];
}

function destructivelyAddElementToEndOfArray(arr ,e) {
  arr.push(e);
  return arr;
}

function addElementToBeginningOfArray(arr, e) {
  return [e, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr ,e) {
  arr.unshift(e);
  return arr;
}

function accessElementInArray(arr, e) {
  return arr[e];
}

function removeElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
