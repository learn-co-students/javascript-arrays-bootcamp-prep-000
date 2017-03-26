var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
var newArray = [element, ...array];
return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element);
return array;
}

function addElementToEndOfArray(array, element){
  var endArray = [...array, element];
  return endArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray (array, index){
var accessArray = [1, 2, 3];
return(accessArray[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.copyWithin();
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}



function hello(name){
  return `Hello, ${name}`
}
