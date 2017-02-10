var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elem){
  var newArr = [elem, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem){
  var newArr = [...arr, elem];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  var newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  return arr.pop();
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length - 1);
}
