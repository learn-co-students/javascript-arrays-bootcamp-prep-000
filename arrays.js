
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  ["element", ...array];
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return destructivelyAddElementToBeginningOfArray
}


function addElementToEndOfArray(array, element){
  [...array, element];
  return addElementToEndOfArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return destructivelyAddElementToEndOfArray
}
/*
function accessElementInArray(array,index){
 return  array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
   array.slice(1)
 array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.pop()
  array
}
*/
