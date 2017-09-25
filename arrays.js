var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  return [elem, ...arr];
}

function destructivelyAddEementToBeginningOfArray(arr, elem) {
  return arr.unshift(elem);
}

function addElementToEndOfArray (arr, elem) {
  return [arr,...elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  return arr.append(elem);
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0, arr.length - 1);
}

done();
