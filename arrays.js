var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem) {
  newArray = arr;
  newArray.unshift(elem);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  newArray = arr;
  newArray.push(elem);
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, idx) {
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  newArray = arr.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  newArray = arr.slice(0, arr.length - 1);
  return newArray;
}
