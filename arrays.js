function addElementToBeginningOfArray(param1, param2) {
  const newOne = ["param2", ...param1];
  return newOne;
}

function destructivelyAddElementToBeginningOfArray(param1, param2) {
  param1.unshift(param2);
}

function addElementToEndOfArray(param1, param2){
  const stuff = [...param1, "param2"];
  return stuff;
}

function destructivelyAddElementToEndOfArray(param1, param2){
  param1.push(param2);
}

function accessElementInArray(arr, ind){
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
   arr.shift()
   return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  arr.slice(0, arr.length - 1)
  return arr;
}

