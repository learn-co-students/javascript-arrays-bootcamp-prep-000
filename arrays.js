var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
  return [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el)
  return arr;
}

function addElementToEndOfArray(arr, el) {
  return [...arr, el];
}

function accessElementInArray(arr, n) {
  return arr[n];
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1);
}
