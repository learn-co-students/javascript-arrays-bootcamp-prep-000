chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(arr,element){
  var newArr = [element, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr,element){
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr,element){
  var newArr = [...arr, element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr,element){
  arr.push(element);
  return arr;
}

function accessElementInArray(arr,index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
   return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  return arr.pop();
}

function removeElementFromEndOfArray(arr){
var array = arr.slice(0, arr.length - 1);
return array;
}
