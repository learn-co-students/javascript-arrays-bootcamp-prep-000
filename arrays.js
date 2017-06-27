var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}
function addElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}
function destructivelyAddElementToEndOfArray(arr, ele) {
    arr.push(ele);
    return arr;
}
function accessElementInArray(arr,idx) {
  return arr[idx];
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr, ele) {
  arr.slice(1);
  return arr;
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.push();
  return arr;
}
function removeElementFromEndOfArray(arr) {
  arr.slice(0, arr.length - 1);
  return arr;
}
