var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle"];

function addElementToBeginningOfArray(arr, b) {
var arr2 = [b, ...arr];
return arr2;
}

function destructivelyAddElementToBeginningOfArray(arr, b) {
arr.unshift(b);
return arr;
}

function addElementToEndOfArray(arr, b) {
var arrNew = [...arr, b];
  return arrNew;
}

function destructivelyAddElementToEndOfArray(arr, b) {
arr.push(b);
  return arr; 
}

function accessElementInArray(arr) {
  return(arr[2]);
  }
  
function  destructivelyRemoveElementFromBeginningOfArray(arr) {
arr.shift();
return arr;
}

function removeElementFromBeginningOfArray(arr) {
var arr2 = arr.slice(1);
return arr2;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
var arrPop = arr.pop();
return arr;
}
 
function removeElementFromEndOfArray(arr) {
var arr2 = arr.slice(0, arr.length - 1);
return arr2;
}