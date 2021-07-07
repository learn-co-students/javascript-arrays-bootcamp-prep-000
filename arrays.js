
var chocolateBars = new Array();
chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (array, element) {
  newArr=[element,...array]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(arr, ele) {
  newArr=[...arr,ele]
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr
}

function accessElementInArray(arr,ind) {
  return(arr[ind]);
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  newarr = arr.slice();
  newarr.shift();
  return newarr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1)
}
