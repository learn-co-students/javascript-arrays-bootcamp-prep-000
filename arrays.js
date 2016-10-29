var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(arr,element){
  var newArr = [element,...arr];
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(arr,element){
  var newArr = arr.unshift(element);
  return arr;
};
function addElementToEndOfArray(arr,element){
  return [...arr,element];
};
function destructivelyAddElementToEndOfArray(arr,element){
  var newArr = arr[arr.length] = element;
  return arr;
};
function accessElementInArray(arr,index){
  return arr[index];
};
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr = arr.slice(1);
  return arr;
}
function removeElementFromEndOfArray(arr){
  var newArr = arr.slice(0,arr.length-1);
  return newArr;
};

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr = arr.slice(-1);
  return arr;
}
