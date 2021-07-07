var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray(array, element){
  var finalArray=[element,...array];
  return finalArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var finalArray=[...array,element];
  return finalArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var n= [1,2,3]
  array=array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  var n=[1,2,3];
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){

  return array.slice(0, array.length - 1);
}

