var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
  return [...[element], arr[0]]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr,element) {
  return [...arr, element]
}

function destructivelyAddElementToEndOfArray(arr,element){
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, i){
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  arr = arr.slice(0, arr.length-1);
  return arr;
}


