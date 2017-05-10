var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array= [element, ...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element);
return array
}
//
function addElementToEndOfArray(array, element){
var array =[...array, element];
return array
}
//
function destructivelyAddElementToEndOfArray(array, element){
array.push (element);
return array
}

function accessElementInArray(array, index){
return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.splice(0,1);
return array
}

function removeElementFromBeginningOfArray(array){
return array.slice(1, array.length);
}

function destructivelyRemoveElementFromEndOfArray(array){
array.splice(2,2);
return array
}

function removeElementFromEndOfArray(array){
return array.slice(0,2)
}
