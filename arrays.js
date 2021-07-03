var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
function addElementToBeginningOfArray(arr, element){
  return [element, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element){
  return [...arr, element];
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}

var accessElementInArray = function(arr, index){
  return arr[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, -1);
}
//var items = [1, 2, 3, 4, 5];
//[...items.slice(0, 2), ...items.slice(3)]; //returns [1, 2, 4, 5]