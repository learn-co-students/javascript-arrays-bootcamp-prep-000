var chocolateBars= ["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,adding){
  var newArray=[adding,...array];
  
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,adding){
  
  array.unshift(adding);
  return array;
}

function addElementToEndOfArray(array,adding){
  var newArray=[...array,adding];
 
  return newArray;
}
function destructivelyAddElementToEndOfArray(array,adding){
  array.push(adding);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromEndOfArray(array){
  var slice = array.slice(0,array.length -1);
 return slice;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromBeginningOfArray(array){
  var slice = array.slice(1);
  return slice;
}