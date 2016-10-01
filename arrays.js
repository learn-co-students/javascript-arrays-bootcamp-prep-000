
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, element) {
  var newArr = arr;
  newArr.unshift(element);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element) {
  var newArr = arr;
  newArr.push(element);
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function removeElementFromEndOfArray(arr) {
  var newArr = arr;
  arr.pop();
  return newArr;
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr;
  newArr.shift();
  return newArr;
}
