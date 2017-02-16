var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element) {
  return [element,...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element) {
return [...arr, element];
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, ind) {
return arr[ind];
}

function removeElementFromBeginningOfArray(arr) {
arr.shift();
return arr;
}

function removeElementFromEndOfArray(arr) {
arr.pop();
return arr;
}
