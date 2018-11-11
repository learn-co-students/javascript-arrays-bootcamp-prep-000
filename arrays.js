var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  var newArr = [element, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element){
  var newArr = [...arr, element];
  return newArr;
}
function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newArr = array.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newArr = array.slice(0, array.length - 1);
  return newArr;
}
