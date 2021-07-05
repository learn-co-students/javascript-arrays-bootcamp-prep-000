var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el){
  var newArr = [el, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el){
  var newArr = [...arr, el];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, el){
  arr.push(el);
  return arr;
}

function accessElementInArray(array, index){
  var el = array[index];
  return el;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var el = array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  var el = array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
