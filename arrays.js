var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(arr, element){
  return [element, ...arr];
}

function destructivelyAddElementToEndOfArray(array, element){
  return arr.push(element);
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
   arr.slice(1);
   return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length-1);
}