var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elm) {
  return [elm, ...arr];
};

function destructivelyAddElementToBeginningOfArray(arr, elm) {
  arr.unshift(elm);
  return arr;
};

function addElementToEndOfArray(arr, elm) {
  return [...arr, elm]
};

function destructivelyAddElementToEndOfArray(arr, elm) {
  arr.push(elm);
  return arr;
};

function accessElementInArray(arr, i) {
  return arr[i]
};

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
};

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
};

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
};

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1)
};
