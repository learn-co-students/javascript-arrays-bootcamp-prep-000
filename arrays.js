var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles'];

function addElementToBeginningOfArray(arr, str) {
  var newArr = [str, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, str) {
  arr.unshift(str);
  return arr;
}

function addElementToEndOfArray(arr, str) {
  var newArr = [...arr, str];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, str) {
  arr.push(str);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  let newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  arrLen = arr.length - 1;
  let newArr = arr.slice(0, arrLen);
  return newArr;
}