var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function destructivelyAddElementToBeginningOfArray (arr, item) {
  arr.unshift(item)
  return arr
}

function addElementToBeginningOfArray (arr, item) {
  var newArray = [item,...arr];
  return newArray
}

function destructivelyAddElementToEndOfArray (arr, item) {
  arr.push(item)
  return arr
}

function addElementToEndOfArray (arr, item) {
  var newArray = [...arr, item];
  return newArray
}

function accessElementInArray (arr, i){
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray (arr){
  arr.shift();
  return arr
}

function destructivelyRemoveElementFromEndOfArray (arr){
  arr.pop();
  return arr
}

function removeElementFromEndOfArray (arr){
  newArray = arr.slice(0,-1);
  return newArray
}

function removeElementFromBeginningOfArray (arr){
  newArray = arr.slice(1);
  return newArray
}
