chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
  temp = [element, ...arr];
  return temp;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr=[element, ...arr];
}

function addElementToEndOfArray(arr, element){
  temp=[...arr, element];
  return temp;
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr=[...arr, element];
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  temp=arr.slice(1);
  return temp;
}

destructivelyRemoveElementFromEndOfArray(arr){
  arr=arr.pop();

  return arr;
}
function removeElementFromEndOfArray(arr){
  temp=arr.slice(0,arr.length-1);

  return temp;
}
