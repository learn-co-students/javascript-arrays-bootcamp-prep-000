var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var myArr = ["1", "2", "3"];

function addElementToBeginningOfArray(arr, element) {
nextArray = [element, ...arr];
return nextArray;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
arr.unshift(element);
return arr;
}

function addElementToEndOfArray(arr, element) {
nextArray = [...arr, element];
return nextArray;
}

function destructivelyAddElementToEndOfArray(arr, element) {
arr.push(element);
return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  slicedArr = arr.slice(1);
  return slicedArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  endSlicedArr = arr.slice(0, arr.length - 1);
  return endSlicedArr;
}