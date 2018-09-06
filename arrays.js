var chocolateBars = ["snickers" ,"hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = array;
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  var array = [];
  arr.unshift(element);
  return arr
}

function addElementToEndOfArray(arr, element){
  var arr = arr;
  var newArr = [...arr, element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, element){
  var arr = arr;
  arr.push(element);
  return arr
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  var arr = arr;
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  var arr = arr;
  arr = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  var arr = arr;
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  var arr = arr;
  var newArr = arr.slice(0, arr.length - 1);
  return newArr;
}
