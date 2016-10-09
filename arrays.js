var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  var newArry = [element, ...arr];
  return newArry
}

function destructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item);
  return arr
}

function addElementToEndOfArray (arr, item) {
  var newArray = [...arr, item];
  return newArray
}

function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item);
  return arr
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1)
}
