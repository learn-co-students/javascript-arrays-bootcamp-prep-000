var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, el) {
  var newArray = arr.unshift(el);
  return newArray;
}

fuction destructivelyAddElementToBeginningOfArray (arr, el) {
  arr = arr.unshift(el);
  return arr;
}

function addElementToEndOfArray (arr, el) {
  var newArray = arr.push(el);
  return newArray;
}

function destructivelyAddElementToEndOfArray (arr, el) {
  arr = arr.push(el);
  return arr;
}

function accessElementInArray (arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0,arr.length - 1);
}
