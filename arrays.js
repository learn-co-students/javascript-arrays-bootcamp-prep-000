var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  var newArr = [element, ...arr]
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr;
}

function addElementToEndOfArray(arr, element){
  var addElementToEndOfArray= [...arr, element]
  return addElementToEndOfArray;
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element)
  return arr
}

function accessElementInArray(arr, ind){
  console.log(arr[ind]);
  return arr[ind];
}

function removeElementFromBeginningOfArray (arr){
  var newArr = arr.slice(1);
  return newArr;
}

function removeElementFromEndOfArray (arr){
  var newArr = arr.slice(0,arr.length-1);
  return newArr;
}
