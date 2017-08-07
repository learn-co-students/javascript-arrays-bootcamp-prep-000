var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, item) {
  return [item, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, item) {
  return arr.unshift(item);
}

function addElementToEndOfArray(arr, item) {
  return [...arr, item];
}

function destructivelyAddElemetToEndOfArray(arr, item) {
  return arr.push(item);
}

function accessElementInArray(arr, index) {
  return  arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
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
